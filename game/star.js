function Star(args) {
	var S = args.S = this;
	$.extend(S, args);

	// determine size and color
	var	v = randomIntFromInterval(1, 119);
	
	// generated from HRD
	if (v <= 1) {
		S.starColor = 'orange';
		S.starSize = 'dwarf';
	} else if (v <= 3) {
		S.starColor = 'blue';
		S.starSize = 'super_giant';
	} else if (v <= 25) {
		S.starColor = 'yellow';
		S.starSize = 'average';
	} else if (v <= 30) {
		S.starColor = 'white';
		S.starSize = 'giant';
	} else if (v <= 31) {
		S.starColor = 'yellow';
		S.starSize = 'dwarf';
	} else if (v <= 45) {
		S.starColor = 'white';
		S.starSize = 'average';
	} else if (v <= 46) {
		S.starColor = 'yellow';
		S.starSize = 'super_giant';
	} else if (v <= 47) {
		S.starColor = 'white';
		S.starSize = 'super_giant';
	} else if (v <= 48) {
		S.starColor = 'red';
		S.starSize = 'super_giant';
	} else if (v <= 67) {
		S.starColor = 'blue';
		S.starSize = 'giant';
	} else if (v <= 71) {
		S.starColor = 'red';
		S.starSize = 'dwarf';
	} else if (v <= 74) {
		S.starColor = 'blue';
		S.starSize = 'average';
	} else if (v <= 75) {
		S.starColor = 'orange';
		S.starSize = 'super_giant';
	} else if (v <= 76) {
		S.starColor = 'brown';
		S.starSize = 'super_giant';
	} else if (v <= 82) {
		S.starColor = 'red';
		S.starSize = 'giant';
	} else if (v <= 83) {
		S.starColor = 'brown';
		S.starSize = 'dwarf';
	} else if (v <= 85) {
		S.starColor = 'red';
		S.starSize = 'average';
	} else if (v <= 86) {
		S.starColor = 'white';
		S.starSize = 'dwarf';
	} else if (v <= 98) {
		S.starColor = 'yellow';
		S.starSize = 'giant';
	} else if (v <= 99) {
		S.starColor = 'brown';
		S.starSize = 'giant';
	} else if (v <= 109) {
		S.starColor = 'orange';
		S.starSize = 'giant';
	} else if (v <= 110) {
		S.starColor = 'blue';
		S.starSize = 'dwarf';
	} else if (v <= 115) {
		S.starColor = 'orange';
		S.starSize = 'average';
		
	// manual
	} else if (v <= 116) {
		S.starColor = 'pulsar';
		S.starSize = 'pulsar';
	} else if (v <= 117) {
		S.starColor = 'quasar';
		S.starSize = 'quasar';
	} else if (v <= 118) {
		S.starColor = 'neutron';
		S.starSize = 'neutron';
	} else if (v <= 119) {
		S.starColor = 'nebula';
		S.starSize = 'nebula';
	}

}