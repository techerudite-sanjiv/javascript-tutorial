import { loadStripe } from '@stripe/stripe-js';

const stripeUri="pk_test_51NslvdSGLJhhL9KkTPKhOzbCT4XC2Mx16yukApztQvXH04m5dgPp64uIbKJtlnUdOJ5ZXVRzHi8rMCs1YyrYsIkC00jXjc314G" 

export const stripePromise = loadStripe(stripeUri);



export const options = {
    clientSecret: '',
  };
