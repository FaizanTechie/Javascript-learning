let jsonRes = '{"fact":"A cat\u2019s heart beats nearly twice as fast as a human heart, at 110 to 140 beats a minute.","length":88}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);