import { useState, useEffect } from "react";
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

const initialFormValues = { fullname: "", phone_number: "" };

function Purchasing({ addContact, contacts }) {
	const [form, setForm] = useState(initialFormValues);

	useEffect(() => {
		setForm(initialFormValues);
	}, [contacts]);

	const onChangeInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (form.fullname === "" || form.phone_number === "") {
			return false;
		}

		addContact([...contacts, form]);
	};
    return (
        <div>
            <form onSubmit={onSubmit}>
			<div> Tarih 
				<input
					name="date"
					placeholder=""
					value={form.date}
                        onChange={onChangeInput}
                        type='date'
				/>
			</div>
			<div> Plaka 
				<input
					name="Plaka"
					placeholder="Plaka"
					value={form.plaka}
                        onChange={onChangeInput}
                       
				/>
			</div>
			<div> Araç Modeli 
				<input
					name="Model"
					placeholder=""
					value={form.model}
                        onChange={onChangeInput}
                       
				/>
			</div>
			<div> Şasi No: 
				<input
					name="Şasi"
					placeholder=""
					value={form.sasi}
                        onChange={onChangeInput}
                       
				/>
			</div>
			<div> Alınacak Malzeme
				<input
					name="Malzeme"
					placeholder="Alınacak Malzeme"
					value={form.malzeme}
					onChange={onChangeInput}
				/>
			</div>

			<div> Alınacak Yer
				<input
					name="Alınacak_Yer"
					placeholder="Alınacak Yer"
					value={form.alinacak_yer}
					onChange={onChangeInput}
				/>
			</div>
			<div> İstek Yapan Kişi
				<input
					name="İstek Yapan Kişi"
					placeholder="İstek Yapan Kişi"
					value={form.istek_yapan_kisi}
					onChange={onChangeInput}
				/>
			</div>
			<div> Açıklama
				<input
					name="Açıklama"
					placeholder="Açıklama"
					value={form.aciklama}
					onChange={onChangeInput}
				/>
			</div>
			<div> Alındığı Tarih
				<input
					name="Alındığı Tarih"
					placeholder="Alındığı Tarih"
					value={form.alindigi_tarih}
						onChange={onChangeInput}
						type='date'
				/>
			</div>

			<div className="btn">
				<button>Add</button>
			</div>
		</form>
        </div>
    )
}

export default Purchasing
