# Introduccion a React Native

## +IMPORTANTE

- Separar los componentes por screen(toda la pantalla) y componentes

```txt
- src
|_ components
|_ screens
```

- Style conditional: estilos dependiendo de algun prop

```js
style={[styles.fabLocation,
        position === 'right' ? styles.right : styles.left]}
```

- Verificar el S.O para asi determinar la estructura del componente que se va a renderizar

```js
 return Platform.OS === 'ios' ? ios() : android()
```

## Style

### Dimensiones

```txt
// Para hacer que siempre use el 20% de la pantalla y no de su componente padre ->  width: width * 20 
 <View style={{ 
  ...styles.violetBox,
  width: width * 0.50 
}} />
```

### Position

Solo exiten dos valores: relative | absolute.

**position: relative** es el valor por default de todos los componentes en react native.
