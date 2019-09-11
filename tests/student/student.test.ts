import request from 'supertest';
import { expect } from 'chai';
import nock from 'nock'

import app from '../../src/app';

describe('typescript unit test', () => {
    it('should return success - 200', (done) => {
        request(app).get('/v1/student?isAsync=""').expect(200).then(res => {
            expect(res.body).to.have.property('staus');
            expect(res.body).to.have.property('data');
            expect(res.body.data).to.be.an('array').to.have.lengthOf(10);
            done();
        });
    });

    it('should retun mocked response', (done) => {
        nock('https://jsonplaceholder.typicode.com')
            .get('/users')
            .reply(200, [{ id: 1, name: 'ahcap' }]);

        request(app).get('/v1/student?isAsync=""').expect(200).then(res => {
            expect(res.body).to.have.property('staus');
            expect(res.body).to.have.property('data');
            expect(res.body.data).to.be.an('array').to.have.lengthOf(1);
            done();
        });
    });

    it('record http response using nock and reuse if exist', (done) => {
        nock.restore();

        const nockBack = require('nock').back;
        nockBack.fixtures = require('path').resolve(__dirname, '../fixtures');
        nockBack.setMode('record');

        const allowLocalhost = () => { nock.enableNetConnect('127.0.0.1'); };
        const filterLocalhost = (reqs) => {
            const localhost = /http:\/\/127\.0\.0\.1.*/;
            return reqs.filter(r => !localhost.test(r.scope));
        };

        nockBack('user.json', { after: allowLocalhost, afterRecord: filterLocalhost }, nockDone => {
            request(app).get('/v1/student?isAsync=""').expect(200).then(res => {
                expect(res.body).to.have.property('staus');
                expect(res.body).to.have.property('data');
                expect(res.body.data).to.be.an('array').to.have.lengthOf(10);
                nockDone();
                done();
            });
        });
    });
});