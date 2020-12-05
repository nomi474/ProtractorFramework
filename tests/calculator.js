let homepage = require('../pages/homepage')
describe('demo calculator test', function(){
   it('addition test', function(){
    homepage.get('http://juliemr.github.io/protractor-demo/');
    homepage.enterFirstNumber('2');
    homepage.enterSecondNumber('3');
    homepage.clickGo();
    homepage.verifyResult('5')
   });

   it('subtraction test', function(){
       
});
});