// List by gender

const thepips = [
  {
    name: 'Arisa', department: 'BP', gender: 'F'
  },
{
    name: 'Grandiose', department: 'BP', gender: 'M'
  },
{
    name: 'Aristot', department: 'BP', gender: 'M'
  },
{
    name: 'Arisables', department: 'BP', gender: 'F'
  },
];



var newArray = thepips.filter(function (el) {
  return el.gender === "F"
});

console.log(newArray);

// Group by department

const data = [
  {
    name: 'Arisa', department: 'BP', gender: 'F'
  },
{
    name: 'Grandiose', department: 'BP', gender: 'M'
  },
{
    name: 'Aristot', department: 'BP', gender: 'M'
  },
{
    name: 'Arisables', department: 'BP', gender: 'F'
  },
];


result = data.reduce(function (r, a) {
    r[a.department] = r[a.department] || [];
    r[a.department].push(a);
    return r;
}, Object.create(null));

console.log(result);