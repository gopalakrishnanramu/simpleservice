'use strict';

const app = require(approot + '/app');
const request = require('supertest');

const chai = require('chai');
const expect = chai.expect;

describe('healthcheck', () => {

  describe('GET /healthcheck', () => {
    it('should return health status', done => {
      request(app)
        .get('/healthcheck')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.equal('Application Health Check OK');
          done();
        });
    });

  });
});