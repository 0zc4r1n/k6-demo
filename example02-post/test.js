import { sleep } from 'k6';
import http from 'k6/http';

export default function () {
  const url = 'http://localhost:3000/add'

  const payload = JSON.stringify({
    param1: 10,
    param2: 20
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params)
  
  sleep(1);       // Human Behavior
}
