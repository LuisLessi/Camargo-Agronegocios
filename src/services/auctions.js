import axios from 'axios';

const auctions = axios.create({
  baseURL: 'https://bis365.com.br/bid365/api/v1/auctions',
  headers: {
    'app': 'ee85db5d-ebec-4548-a62b-ae8c68955d31'
  }
});


  export default auctions;