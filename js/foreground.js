/*
 *   Copyright (c) 2023 Alexey Vinogradov
 *   All rights reserved.

 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 */

const claimButtonArea = "#availableFaucets > div:first-child div:last-child";
const claimButton = claimButtonArea + " > button";
const clickFunction = function (index, elements) {
    if(elements == null)
        return;
    if (index < elements.length) {
        elements[index].click();
        setTimeout(() => clickFunction(index + 1, elements), 120);
    }
};

var intervalId = setInterval(() => {
    //загрузился ли блок фасета
    if (document.querySelector('#availableFaucets div') == null) return;
    var button = document.querySelector(claimButton);
    const otherButtons = document.querySelectorAll("button.makeclaim");
    if(button == null){
        //проверка необходимости отображения кнопки
        document.querySelector(claimButtonArea).innerHTML = "<button style='display:none; width: 100%;' class='btn btn-sm btn-success'>Claim all</button>";
        button = document.querySelector(claimButton);
    }
    button.style["display"] = otherButtons.length <= 0 ? 'none' : 'block';
    button.onclick = function() { clickFunction(0, otherButtons) };
}, 500);