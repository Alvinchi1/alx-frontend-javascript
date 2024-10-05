import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
	const budget = getBudgetObject(income, gdp, cpita);
	const fullBudget = {
		...Budget,
		getIncomeInDollars: (income) => '$${income}',
		getInccomeInEuros: (income) => '${income} euros'
	};

	return fullBudget;
}
