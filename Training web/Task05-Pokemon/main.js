/*Configuration file*/
const typesData = {
  fire: {
    grass: 2,
    water: 0.5,
    electric: 1
  },
  water: {
    grass: 0.5,
    electric: 0.5
  },
  grass: {
    electric: 1
  }
};

/*typesEffectivenessManager file*/
const typesEffectivenessManager = (function(typesData) {
  let instance;
  let typesEffectivenessTable;
  let typeValueMap = new Map();

  const fillTypesEffectivenessTable = () => {
    let numRowsAndColums = Object.keys(typesData).length + 1;

    typesEffectivenessTable = Array(numRowsAndColums)
      .fill()
      .map(() => Array(numRowsAndColums).fill(1));

    for (let typeA in typesData) {
      let col;
      let row;

      for (let typeB in typesData[typeA]) {
        col = getTypeValueAndAddIfNotPresent(typeA);
        row = getTypeValueAndAddIfNotPresent(typeB);

        typesEffectivenessTable[col][row] = typesData[typeA][typeB];
        typesEffectivenessTable[row][col] = 1 / typesData[typeA][typeB];
      }
    }
  };

  const getTypeValueAndAddIfNotPresent = type => {
    if (!typeValueMap.has(type)) {
      typeValueMap.set(type, typeValueMap.size);
    }
    return typeValueMap.get(type);
  };

  const getTypeValue = type => {
    if (!typeValueMap.has(type)) {
      throw {
        name: "UnknowType",
        message: `There is no data for ${type} type`
      };
    }
    return typeValueMap.get(type);
  };

  const init = () => {
    fillTypesEffectivenessTable();

    return {
      getDamageMultiplier: (typeA, typeB) => {
        let col = getTypeValue(typeA);
        let row = getTypeValue(typeB);

        return typesEffectivenessTable[col][row];
      }
    };
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})(typesData);

/*combatActions file*/
const combatActionsManager = (function() {
  const concreteTypesEffectivenessManager = typesEffectivenessManager.getInstance();
  const baseDamage = 50;

  const baseDamageCalculation = (attack, defense) => {
    return baseDamage * (attack / defense);
  };

  return {
    getDamageDealtWithMultipliers: (attaker, defender) => {
      const { Attack: attack, Type: attakerType } = attaker;
      const { Defense: defense, Type: defenderType } = defender;

      let baseDamage = baseDamageCalculation(attack, defense);
      let damageMultiplier = concreteTypesEffectivenessManager.getDamageMultiplier(
        attakerType,
        defenderType
      );

      return Math.round(baseDamage * damageMultiplier);
    }
  };
})();

/*main file*/
const attaker = {
  Name: "Torchic",
  Type: "fire",
  Attack: 60,
  Defense: 40
};

const defender = {
  Name: "Serperior",
  Type: "grass",
  Attack: 75,
  Defense: 95
};

console.log(
  combatActionsManager.getDamageDealtWithMultipliers(attaker, defender)
);
