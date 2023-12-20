import {retry} from '@reduxjs/toolkit/dist/query';
import {api} from './api';

export const servicesApi = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<any, any>({
      query: body => ({
        url: '/user/login',
        method: 'POST',
        body,
      }),
      extraOptions: {
        backoff: () => {
          retry.fail({fake: 'error'});
        },
      },
    }),
    registerUser: build.mutation<any, any>({
      query: body => ({url: '/register', method: 'POST', body}),
    }),
  }),
});

export const {useLoginMutation, useRegisterUserMutation} = servicesApi;
