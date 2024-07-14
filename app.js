const scores = [
  { score: 90, subject: 'HTML', weight: 0.2 },
  { score: 95, subject: 'CSS', weight: 0.3 },
  { score: 85, subject: 'JavaScript', weight: 0.5 }
];
// expected result: 89

function weightedAvg(scores) {
  let totalWeightedScore = 0
  let totalWeight = 0

  for (const { score, weight } of scores) {
    totalWeightedScore += score * weight
    totalWeight += weight
  }

  const weightedAverage = totalWeightedScore / totalWeight
  return weightedAverage
}

const result = weightedAvg(scores)
console.log(result);  
