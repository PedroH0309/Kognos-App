import test from 'node:test';
import assert from 'node:assert/strict';
import {parseBrazilianDate,formatBrazilianDate,weeklyStudyHours} from './onboarding-helpers.ts';

test('Brazilian calendar accepts valid dates and outputs ISO',()=>{
 assert.equal(parseBrazilianDate('01/11/2026'),'2026-11-01');
 assert.equal(parseBrazilianDate('29/02/2028'),'2028-02-29');
 assert.equal(formatBrazilianDate('2026-11-01'),'01/11/2026');
});
test('Brazilian calendar rejects invalid dates instead of normalizing them',()=>{
 for(const date of ['31/02/2027','29/02/2027','00/09/2027','01/13/2027','2027-02-10','14/02/1800',''])assert.equal(parseBrazilianDate(date),null,date);
});
test('study hour estimate is consistent with selected days',()=>{
 assert.equal(weeklyStudyHours(60,5),5);
 assert.equal(weeklyStudyHours(25,3),1.3);
 assert.equal(weeklyStudyHours(60,0),0);
});