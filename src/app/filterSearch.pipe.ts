import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
	name: 'filterSearch'
})

export class FilterSearch implements PipeTransform {

		transform(coinResults: any, filterName: any): any {
			if (filterName === undefined) return coinResults;
			// return update name array
			return coinResults.filter(function(coinResult){
				return coinResult.name.includes(filterName);
			})
	}
}