import { ClientFunction } from 'testcafe';

export const getPageTitle = ClientFunction(() => document.title);

export const fixture = (...args) => global.fixture(...args);
