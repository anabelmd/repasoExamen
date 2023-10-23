### Ejercicio 3 de chatgpt

Basándote en el archivo HTML previamente proporcionado y sin hacer cambios en él, desarrolla un archivo JavaScript que cumpla con las siguientes funcionalidades:

1. Al cargar la página, genera 50 asientos (representados por divs con la clase "seat") dentro del contenedor con el ID "cinema". 
2. De esos 50 asientos, al menos 10 de ellos deben estar ya reservados. Estos asientos reservados deben tener la clase "reserved" (utiliza la propiedad `className` para asignar múltiples clases, separándolas con un espacio).
3. Al hacer clic en un asiento disponible (aquellos que no están reservados), este debe cambiar su apariencia (puedes cambiar su propiedad `style.backgroundColor` a azul) para indicar que ha sido seleccionado y añadirse a la lista "Asientos seleccionados". Si el asiento ya está seleccionado y se vuelve a hacer clic, debe regresar a su estado original y ser eliminado de la lista.
4. Los asientos ya reservados no deben poder ser seleccionados y no deben responder al clic.
5. Al hacer clic en "Confirmar Reserva", los asientos seleccionados deben adoptar la apariencia de asientos reservados y la lista de "Asientos seleccionados" debe vaciarse.

Consejos:
- Puedes usar condicionales para verificar la existencia de una clase específica en la propiedad `className` de un elemento, por ejemplo, utilizando la función `indexOf`.
- Haz uso de los eventos `click` y funciones como `createElement`, `appendChild` y `removeChild` para implementar las funcionalidades requeridas.

---

### Realizado por: Anabel Montero Díaz

![Imagen no encontrada](imagenes/logoModificadoAnabel.png)