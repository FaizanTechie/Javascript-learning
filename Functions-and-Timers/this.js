const student = {
    name: "Faizan",
    age: 21,
    eng: 75,
    math: 85,
    phy: 25,
    getAvg() {
        let avg = (this.math + this.eng + this.phy) / 3;
        console.log(`${this.name} got`);
    }
}