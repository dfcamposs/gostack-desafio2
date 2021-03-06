import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.FLOAT,
        weight: Sequelize.FLOAT,
        stature: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
  }
}

export default Student;
