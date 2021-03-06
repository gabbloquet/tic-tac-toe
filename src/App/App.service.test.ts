import {AppReducer} from './App.service';

describe('Application', () =>{
	describe('Application reducer', () => {
		it('should return the state if an unexpected value is provided', () => {
			const state = {
				id: '1'
			}
			const strangeAction = 'This is a really stange action !'
			expect(AppReducer(state, strangeAction)).toEqual(state);
		});
	});
})
