if (e.target.value === "ascending") {
    let temp_data = data.reverse()
    setTempData(temp_data)
}
else if (e.target.value === "descending") {
    let temp_data = data?.reverse()
    setTempData(temp_data)
}
setFlag(!flag)