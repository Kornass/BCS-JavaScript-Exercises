// Implement a representation of the universe where matter and energy is conserved.
// To do so implement one object called Universe that contains two objects within:
// matter and energy. If matter is destroyed; that is say we call Universe.matter.destroy(5),
// then the amount of energy in the universe needs to be increased so that if we call
// Universe.energy.total() we should obtain a total value of energy that has increased +5
// compared to the energy value previous to calling Universe.matter.destroy(5).
// Of course the total amount of matter obtained by calling Universe.matter.total()has been
// reduced by 5 compared to the initial value.
//   - Implement this objects using context
//   - The matter and energy objects are defined within an object called Universe
//   - No other variable should be defined out of the Universe object
//   - Also implement the create methods for both matter an energy which are opposite to
//     their counterparts
//   - You should be able to give an initial amount to either the energy or the matter,
//     otherwise should default to 0.

//======================  EXAMPLE  ========================
// var universe = new Universe(10, 'matter')
// universe.matter.total // 10
// universe.energy.total // 0

// // or with no initial amount
// var universe = new Universe()
// universe.matter.total // 0
// universe.energy.total // 0
// universe.matter.destroy(5) // 0
// universe.matter.total // -5
// universe.energy.total // 5
// universe.energy.destroy(-5) // 0
// universe.matter.total // -10
// universe.energy.total // 10
// universe.energy.create(5) // 0
// universe.matter.total // -15
// universe.energy.total // 15
//=========================================================

// Notes: Initially make your universe contain 0 matter and energy.
// Destroying a negative amount of energy of matter is equal to creating
// a positive amount of each and vice versa for creating matter or energy.

class Universe {
  constructor(init = 0, which) {
    let self = this;
    this.matter = {
      total: which == "matter" ? init : 0,
      destroy: function (num) {
        this.total -= num;
        self.energy.total += num;
      },
      create: function (num) {
        this.total += num;
        self.energy.total -= num;
      },
    };
    this.energy = {
      total: which == "energy" ? init : 0,
      destroy: function (num) {
        this.total -= num;
        self.matter.total += num;
      },
      create: function (num) {
        this.total += num;
        self.matter.total -= num;
      },
    };
  }
}
