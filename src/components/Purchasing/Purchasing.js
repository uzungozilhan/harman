import { useState, useEffect } from "react";
import { VehicleList } from "./VehicleList"; 
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

const initialFormValues = { date: "", license_plate: "", model: "", chassis_no: "", amount: "1", quantity: "Adet", malzeme: "", alinacak_yer: "", istek_yapan_kisi: "", aciklama: "", alindigi_tarih: "", };

function Purchasing({ addItem, item }) {
	const [form, setForm] = useState(initialFormValues);

	useEffect(() => {
		setForm(initialFormValues);
	}, [item]);

	const onChangeInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(form)

		if (form.date === "" || form.plaka === "") {
			return false;
		}

		addItem([...item, form]);

		setForm({date: "", license_plate: "", model: "", chassis_no: "", amount: "1", quantity: "Adet", malzeme: "", alinacak_yer: "", istek_yapan_kisi: "", aciklama: "", alindigi_tarih: "",})
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
					name="license_plate"
					placeholder="Plaka"
					value={form.license_plate}
                        onChange={onChangeInput}
                       
				/>
			</div>
			<div> Araç Modeli 
				<input
					name="model"
					placeholder=""
					value={form.model}
                        onChange={onChangeInput}
                       
				/>
			</div>
			<div> Şasi No: 
				<input
					name="chassis_no"
					placeholder=""
					value={form.chassis_no}
                        onChange={onChangeInput}
                       
				/>
			</div>
			<div> Miktar: 
				<input
					name="amount"
					// placeholder="Miktar"
					value={form.amount}
						onChange={onChangeInput}
						type="number"
                       
				/>
			</div>
			<div> Birim: 
				<input
					name="quantity"
					placeholder="Birim"
					value={form.quantity}
                        onChange={onChangeInput}
                       
				/>
			</div>
			<div> Alınacak Malzeme
				<input
					name="malzeme"
					placeholder="Alınacak Malzeme"
					value={form.malzeme}
					onChange={onChangeInput}
				/>
			</div>

			<div> Alınacak Yer
				<input
					name="alinacak_yer"
					placeholder="Alınacak Yer"
					value={form.alinacak_yer}
					onChange={onChangeInput}
				/>
			</div>
			<div> İstek Yapan Kişi
				<input
					name="istek_yapan_kisi"
					placeholder="İstek Yapan Kişi"
					value={form.istek_yapan_kisi}
					onChange={onChangeInput}
				/>
			</div>
			<div> Açıklama
				<input
					name="aciklama"
					placeholder="Açıklama"
					value={form.aciklama}
					onChange={onChangeInput}
				/>
			</div>
			<div> Alındığı Tarih
				<input
					name="alindigi_tarih"
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
