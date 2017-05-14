import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
	name: 'filterName'
})

export class FilterName implements PipeTransform {

		transform(coinResults: any, filterName: any): any {
			if (filterName === undefined) return coinResults;
			// return update name array
			return coinResults.filter(function(coinResult){
				return coinResult.name.toLowerCase().includes(filterName.toLowerCase());
			})
	}
}