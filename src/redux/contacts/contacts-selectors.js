import { createSelector } from 'reselect';

const getContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getLoading = state => state.contacts.loading;

const getError = state => state.contacts.error;

const getLowercasedFilter = state => {
  const filter = getFilter(state);

  return filter.toLowerCase(state);
};

const getFilteredContacts = createSelector(
  [getContacts, getLowercasedFilter],
  (contacts, lowercasedFilter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowercasedFilter),
    ),
);

const contactsSelectors = {
  getContacts,
  getFilter,
  getLoading,
  getError,
  getFilteredContacts,
};

export default contactsSelectors;
