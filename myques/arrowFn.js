let company = {
    title: "TCS",
    students: ["John", "Ben", "David"],

    showList() {
        this.students.forEach(
            student => console.log("company name is "+this.title + " " +"students name is "+ this.students)
        )
    }
}

company.showList();