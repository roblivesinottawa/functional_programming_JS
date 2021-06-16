// any function that relies on a random number generator cannot be pure

yearEndEvaluation = () => {
  Math.random() > 0.5 ? `You get a raise.` : `Better luck next year.`;
};

yearEndEvaluation();
