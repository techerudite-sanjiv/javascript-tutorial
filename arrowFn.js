let company = {
    title: "TCS",
    students: ["John", "Ben", "David"],

    showList() {
        this.students.forEach(
            student => console.log(this.title + " " + this.students)
        )
    }
}

company.showList();