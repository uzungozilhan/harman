import React from "react";
import { Table, Icon } from "semantic-ui-react";

function List({ item }) {
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <Table size="large" className="table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Tarih</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Plaka</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Araç Modeli</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Şasi No</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Miktar</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Birim</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              Alınacak Malzeme
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Alınacak Yer</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              İstek Yapan Kişi
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Açıklama</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              Alındığı Tarih
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
                      
        </Table.Body>
      </Table>
      <ul>
        {item.map((item, i) => (
          <li key={i}>{item.date}</li>
        ))}
      </ul>
      <ul>
        {item.map((item, i) => (
          <li key={i}>{item.license_plate}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
