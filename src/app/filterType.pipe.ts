import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
	name: 'filterType'
})

export class FilterType implements PipeTransform {

		transform(coinResults: any, filterType: any): any {
			if (filterType === undefined) return coinResults;
			if (filterType === "both") return coinResults;
			// return update name array
			return coinResults.filter(function(coinResult){
				return coinResult.type.includes(filterType);
			})
	}
}