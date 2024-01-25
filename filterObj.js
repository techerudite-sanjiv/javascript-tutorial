const users = [
    {
        name: "sanjeev",
        age: 24,
        company: "Tcs"
    },
    {
        name: "Rahul",
        age: 21,
        company: "Tcs"
    },
    {
        name: "Pradeep",
        age: 22,
        company: "Tcs"
    },
    {
        name: "Ujjaval",
        age: 27,
        company: "Tcs"
    },
]

const result = users.filter((item) => item.age > 23)

console.log(result)