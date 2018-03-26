'use strict';

const app = require(approot + '/app');
const request = require('supertest');

const chai = require('chai');
const expect = chai.expect;

describe('service', () => {
  describe('GET /service', () => {
    it('should get response', done => {
      request(app)
        .get('/service')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.deep.equal({
            "data": {
              "message": "You got it!"
            }
          });
          done();
        });
    });
  });
  describe('POST /service', () => {
    it('should post and return response', done => {
      request(app)
        .post('/service')
        .send({
            "data": {
              "message": "Testing!"
            }           
        })
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.deep.equal({
            "data": {
              "message": "Testing!"
            }
          });
          done();
        });
    });
  });
  describe('UPDATE /service', () => {
    it('should update and return response', done => {
      request(app)
        .put('/service')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.deep.equal({
            "message": "Updated successfully!"
          });
          done();
        });
    });
  });
  describe('DELETE /service', () => {
    it('should delete and return response', done => {
      request(app)
        .delete('/service')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.deep.equal({
            "message": "Deleted successfully!"
          });
          done();
        });
    });
  });
});