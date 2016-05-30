describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should calculate area for given numbers', function () {
            expect(answer.calculateArea(5,4,2,'Success', 'Error')).toEqual({area: 3, message: 'Success'});
            expect(answer.calculateArea(7,6,2,'Success', 'Error')).toEqual({area: 5, message: 'Success'});
            expect(answer.calculateArea(15,21,3,'Success', 'Error')).toEqual({area: 48, message: 'Success'});
            expect(answer.calculateArea(10,8,3,'Success', 'Error')).toEqual({area: 14, message: 'Success'});
        });
        it('should return false if some of arguments are incorrect', function () {
            expect(answer.calculateArea(7)).toEqual(false);
            expect(answer.calculateArea('a','d','a')).toEqual(false);
            expect(answer.calculateArea('','','','','','')).toEqual(false);
            expect(answer.calculateArea(1,23,7,2)).toEqual(false);
            expect(answer.calculateArea(1,4,'','','')).toEqual(false);
        });
        it('should return area with message error', function () {
            expect(answer.calculateArea(3,2,8,'Success','Error')).toEqual({ area : -15, message : 'Error' });
            expect(answer.calculateArea(5,5,5,'Success','Error')).toEqual({ area : -20, message : 'Error' });
            expect(answer.calculateArea(1,2,14,'Success','Error')).toEqual({ area : -12, message : 'Error' });
            expect(answer.calculateArea(7,3,10,'Success','Error')).toEqual({ area : -23, message : 'Error' });
        });
        it('should return area 0 and message Big Null', function () {
            expect(answer.calculateArea(0,0,0,'Success','Error')).toEqual({ area : 0, message : 'Big null' });
            expect(answer.calculateArea(2,1,2,'Success','Error')).toEqual({ area : 0, message : 'Big null' });
        });
    });
});