module.exports = (nDice) => {
  const results = {
    successes: 0,
    failures: 0,
    nRolled: nDice,
  };

  for (let i = 0; i < nDice; i += 1) {
    const result = Math.floor(Math.random() * 10) + 1;
    if (result >= 7) {
      if (result === 10) {
        results.successes += 2;
      } else {
        results.successes += 1;
      }
    } else if (result === 1) {
      results.failures += 1;
    }
  }

  return results;
};
