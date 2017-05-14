import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
	name: 'filterType'
})

export class FilterType implements PipeTransform {

		transform(coinResults: any, filterType: any): any {
			// return update name array
			return coinResults.filter(function(coinResult){
				return coinResult.name.toLowerCase().includes(filterType.toLowerCase());
			})

	}

}