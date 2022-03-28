from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
import os

app = FastAPI()


class Params(BaseModel):
    param1: int
    param2: int


@app.post("/add")
def root(params: Params):
    adding = 0

    param1 = params.param1
    param2 = params.param2

    for i in range(0, param1):
        adding = 1 + adding

    for j in range(0, param2):
        adding = 1 + adding

    result = {
        "result": adding,
        "status": "param1 ["+str(param1)+"] + param2 ["+str(param2)+"] = ["+str(adding)+"]"
    }

    return result


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv('PORT')))
