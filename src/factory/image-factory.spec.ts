import { describe, it } from "node:test"
import {createImage, Image}  from "./image-factory"


describe("Image Factory" , () => {


    it("Should create a new instance of Image", () =>{

        const ImageInstance  = createImage("png")

        expect(ImageInstance).toBeInstanceOf(Image);

    })


})