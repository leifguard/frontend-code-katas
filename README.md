# frontend-code-katas

This repository contains a collection of frontend code katas. First only Jquery.

## Jquery Katas

### Markup
```
<html>
	<head>
		<title>Jquery Kata</title>
	</head>
	<body>
		<section>Eine Section</section>
		
		<div class="klasse1">Ein Div</div>
		
		<div id="peter">Ein Div</div>
		<p>Formular</p>
		<form name="formular">
			<fieldset>
				<legend>Formular Markup 1</legend>
				<label for="eingabefeld1">Label Eingabefeld 1</label>
				<input id="eingabefeld1" type="test" name="eingabefeld"/>
			</fieldset>
      		<fieldset>
        		<legend>Formular Markup 2</legend>
				<label for="eingabefeld2">Label Eingabefeld 2</label>
        		<input type="checkbox" id="eingabefeld2" name="einecheckbox">
			</fieldset>
			<fieldset>
        		<legend>Formular Markup 2</legend>
        		<input type="checkbox" id="eingabefeld3" name="checkboxVorname">
				<input type="checkbox" id="eingabefeld4" name="checkboxName">
				<input type="checkbox" id="eingabefeld5" name="checkboxAGB">
				<input type="checkbox" id="eingabefeld5" name="checkbox-AGB">
			</fieldset>
			<fieldset>
        		<legend>Abschicken</legend>
				<input type="submit" value="abschicken">
				<input type="reset" value="zurücksetzen">
			</fieldset>
		</form>
		<p>Parent & Children</p>
		<div class="parent">
			<div>1</div>
			<div>2</div>
			<div>3</div>
		</div>
		<p>Liste</p>
		<ul>
			<li><a href="#">Link 1</a></li>
			<li><a href="#">Link 2</a></li>
			<li><a href="#">Link 3</a></li>
			<li><a href="#">Link 4</a></li>
		</ul>
		<p>Tabelle</p>
		<table>
			<tr>
				<td>Reihe 1</td>
				<td>Reihe 1</td>
				<td>Reihe 1</td>
				<td>Reihe 1</td>
			</tr>
			<tr>
				<td>Reihe 2</td>
				<td>Reihe 2</td>
				<td>Reihe 2</td>
				<td>Reihe 2</td>
			</tr>
			<tr>
				<td>Reihe 3</td>
				<td>Reihe 3</td>
				<td>Reihe 3</td>
				<td>Reihe 3</td>
			</tr>
			<tr>
				<td>Reihe 4</td>
				<td>Reihe 4</td>
				<td>Reihe 4</td>
				<td>Reihe 4</td>
			</tr>
		</table>
	</body>
</html>

``

### 1. Übung - Selectors (https://codepen.io/leifguard/pen/zdEzOg)

#### Basic-Selectors
- Universal
- Element
- Klasse
- Attribut-Selektoren
- Id
- Multiple Selectors

#### Basic-Filter
- Even
- Odd
- Not

#### Child-Filter
- First-Child
- Last-Child
- nth-Child

#### Form-Filter
- Button
- Checkbox
- Input
- Disabled
- Checked
- Selected

### 2. Übung - Events (https://codepen.io/leifguard/pen/gxGRvz)

- Event-Attachment
- Event-Object
- Mouse-Events
- Keyboard-Events
- Form-Events
- Browser-Events

### 3. Übung - Traversing

### 4. Übung - Manipulation