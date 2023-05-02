// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { server } from "./msw/server";

// establish API mocking before all tests.
beforeAll(() => server.listen());

// reset any request handlers that we may add during the tests.
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// tidy after all the tests are done.
afterAll(() => server.close());
