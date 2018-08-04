export const getBudgetLink = ({ budgetId }) => `/budgets/${budgetId}`;

export const getCurrentMonthGroupLink = ({ budgetId, categoryGroupId }) =>
  `/budgets/${budgetId}/current/${categoryGroupId}`;

export const getCurrentMonthCategoryLink = ({ budgetId, categoryGroupId, categoryId }) =>
  `/budgets/${budgetId}/current/${categoryGroupId}/${categoryId}`;

export const getCategoryGroupLink = ({ budgetId, categoryGroupId }) =>
  `/budgets/${budgetId}/category-groups/${categoryGroupId}`;

export const getPayeeLink = ({ budgetId, payeeId }) =>
  `/budgets/${budgetId}/payees/${payeeId}`;
