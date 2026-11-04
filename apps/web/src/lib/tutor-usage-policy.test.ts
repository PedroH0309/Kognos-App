import {test} from 'node:test';
import assert from 'node:assert/strict';
import {tutorDailyRequestLimit} from './tutor-usage-policy.ts';

test('tutor quota defaults to thirty shared AI requests per account and day',()=>{
 assert.equal(tutorDailyRequestLimit({}),30);
 assert.equal(tutorDailyRequestLimit({TUTOR_DAILY_REQUEST_LIMIT:''}),30);
 assert.equal(tutorDailyRequestLimit({TUTOR_DAILY_REQUEST_LIMIT:'35'}),35);
});
test('tutor quota cannot be disabled or amplified through the environment',()=>{
 assert.equal(tutorDailyRequestLimit({TUTOR_DAILY_REQUEST_LIMIT:'0'}),1);
 assert.equal(tutorDailyRequestLimit({TUTOR_DAILY_REQUEST_LIMIT:'-4'}),1);
 assert.equal(tutorDailyRequestLimit({TUTOR_DAILY_REQUEST_LIMIT:'9999'}),100);
 for(const value of ['invalid','Infinity','NaN','1.5']){
  assert.equal(tutorDailyRequestLimit({TUTOR_DAILY_REQUEST_LIMIT:value}),30);
 }
});
