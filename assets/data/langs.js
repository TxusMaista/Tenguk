Lang = function (option) {
	// body...
	var lang_eu = {
		title: 'Aldizkari Elektronikoa',
		username: 'Erabiltzailea',
		password: 'Pasahitza',
		login: 'Sartu',
		register: 'Erregistratu',
		reg_text: 'Oraindik ez zara Tentu?',
		reg_rem: 'Izena edo pasahitza ahaztu duzu?',
		sec_nab: 'Nabarmen',
		sec_ger: 'Gertukoak',
		sec_zal: 'Zaletasunak',
		sec_age: 'Agenda',
		sec_kag: 'Kirol Agenda'
	};
	var lang_es = {
		title: 'Revista Electrónica',
		username: 'Nombre de Usuario',
		password: 'Contraseña',
		login: 'Entrar',
		register: 'Registrarse',
		reg_text: 'Todavía no eres Tentu?',
		reg_rem: '¿Has olvidado el nombre de usuario o contraseña?',
		sec_nab: 'Destacados',
		sec_ger: 'Cercanos',
		sec_zal: 'Aficiones',
		sec_age: 'Agenda',
		sec_kag: 'Agenda Deportiva'
	};

	if(option === 'eu') return lang_eu;
	else return lang_es;
}