/**
 * @properties={typeid:24,uuid:"A740E7C0-283D-4B89-A9DE-12D9444A79C3"}
 */
function fill() {
	var getcount = 50;

	var fsdatasource = datasources.db.bauprocheck.projekte.getFoundSet();
	var fsmem = datasources.mem.InMemDS.getFoundSet();
	fsdatasource.loadRecords();
	for (var i = 1; i <= getcount; i++) {

		if (fsdatasource.getSize() < i) {
			break;
		}
		var selectawRecord = fsdatasource.getRecord(i)
		if (!utils.hasRecords(selectawRecord.projekte_to_zeiterfassung)) {
			getcount++;
			continue;
		}
		var memrecord = fsmem.getRecord(fsmem.newRecord());
		memrecord.projekte_id = selectawRecord.projekte_id;
	}
	application.output('Filled')
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F3B12DDD-0029-4BD9-B1D0-BD7F5A4993A9"}
 */
function onLoad_fill(event) {
	fill();
}
