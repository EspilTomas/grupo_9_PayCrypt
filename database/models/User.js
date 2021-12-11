module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
       name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
       lastName: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
       dni: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        location: {
            type: dataTypes.STRING(155),
            allowNull: false
        }
    };

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const User = sequelize.define(alias, cols, config); 

    User.associate = function (models) {
        User.belongsTo(models.Product, { 
            as: "products", // El nombre del modelo pero en plural
            foreignKey: 'userId',
            timestamps: false
        }),
        User.hasOne(models.Cart, {     // hasOne = la clave externa se definirá en el modelo de destino, si no porner .belongsTo
            as: "carts", // El nombre del modelo pero en plural
            foreignKey: 'userId',
            timestamps: false
        })
    }

    return User
};