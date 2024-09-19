import "../styles/styles2.css";

const Seats = () => {
    return (
        <>
            <h1>Escoge tus asientos</h1>
            <h2>Trans Copacabana, Semi-cama, 5:00 - 13:00, 80 Bs</h2>

            <div className="bus-seats">
                {/* Fila de los asientos del 1 al 11 */}
                <div className="seat-row">
                    <input type="checkbox" id="seat41" className="seat-checkbox" />
                    <label htmlFor="seat41" className="seat">41</label>

                    <input type="checkbox" id="seat37" className="seat-checkbox" />
                    <label htmlFor="seat37" className="seat">37</label>

                    <input type="checkbox" id="seat33" className="seat-checkbox" />
                    <label htmlFor="seat33" className="seat">33</label>

                    <input type="checkbox" id="seat29" className="seat-checkbox" />
                    <label htmlFor="seat29" className="seat">29</label>

                    <input type="checkbox" id="seat25" className="seat-checkbox" disabled />
                    <label htmlFor="seat25" className="seat reserved">25</label>

                    <input type="checkbox" id="seat21" className="seat-checkbox " disabled />
                    <label htmlFor="seat21" className="seat occupied">21</label>

                    <input type="checkbox" id="seat17" className="seat-checkbox" />
                    <label htmlFor="seat17" className="seat">17</label>

                    <input type="checkbox" id="seat13" className="seat-checkbox" />
                    <label htmlFor="seat13" className="seat">13</label>

                    <input type="checkbox" id="seat9" className="seat-checkbox" />
                    <label htmlFor="seat9" className="seat">9</label>

                    <input type="checkbox" id="seat5" className="seat-checkbox" />
                    <label htmlFor="seat5" className="seat">5</label>

                    <input type="checkbox" id="seat1" className="seat-checkbox" />
                    <label htmlFor="seat1" className="seat">1</label>
                </div>

                {/* Fila de los asientos del 12 al 21 */}
                <div className="seat-row">
                    <input type="checkbox" id="seat42" className="seat-checkbox" />
                    <label htmlFor="seat42" className="seat">42</label>

                    <input type="checkbox" id="seat38" className="seat-checkbox" />
                    <label htmlFor="seat38" className="seat">38</label>

                    <input type="checkbox" id="seat34" className="seat-checkbox" />
                    <label htmlFor="seat34" className="seat">34</label>

                    <input type="checkbox" id="seat30" className="seat-checkbox" />
                    <label htmlFor="seat30" className="seat">30</label>

                    <input type="checkbox" id="seat26" className="seat-checkbox" />
                    <label htmlFor="seat26" className="seat">26</label>

                    <input type="checkbox" id="seat22" className="seat-checkbox" />
                    <label htmlFor="seat22" className="seat">22</label>

                    <input type="checkbox" id="seat18" className="seat-checkbox" />
                    <label htmlFor="seat18" className="seat">18</label>

                    <input type="checkbox" id="seat14" className="seat-checkbox" />
                    <label htmlFor="seat14" className="seat">14</label>

                    <input type="checkbox" id="seat10" className="seat-checkbox" />
                    <label htmlFor="seat10" className="seat">10</label>

                    <input type="checkbox" id="seat6" className="seat-checkbox" />
                    <label htmlFor="seat6" className="seat">6</label>

                    <input type="checkbox" id="seat2" className="seat-checkbox" />
                    <label htmlFor="seat2" className="seat">2</label>
                </div>

                <br />

                {/* Fila de los asientos del 22 al 32 */}
                <div className="seat-row">

                    <input type="checkbox" id="seat43" className="seat-checkbox" />
                    <label htmlFor="seat43" className="seat">43</label>

                    <input type="checkbox" id="seat39" className="seat-checkbox" />
                    <label htmlFor="seat39" className="seat">39</label>

                    <input type="checkbox" id="seat35" className="seat-checkbox" />
                    <label htmlFor="seat35" className="seat">35</label>

                    <input type="checkbox" id="seat31" className="seat-checkbox" />
                    <label htmlFor="seat31" className="seat">31</label>

                    <input type="checkbox" id="seat27" className="seat-checkbox" />
                    <label htmlFor="seat27" className="seat">27</label>

                    <input type="checkbox" id="seat23" className="seat-checkbox" />
                    <label htmlFor="seat23" className="seat">23</label>

                    <input type="checkbox" id="seat19" className="seat-checkbox" />
                    <label htmlFor="seat19" className="seat">19</label>

                    <input type="checkbox" id="seat15" className="seat-checkbox" />
                    <label htmlFor="seat15" className="seat">15</label>

                    <input type="checkbox" id="seat11" className="seat-checkbox" />
                    <label htmlFor="seat11" className="seat">11</label>

                    <input type="checkbox" id="seat7" className="seat-checkbox" />
                    <label htmlFor="seat7" className="seat">7</label>

                    <input type="checkbox" id="seat3" className="seat-checkbox" />
                    <label htmlFor="seat3" className="seat">3</label>

                </div>

                <div className="seat-row">

                    <input type="checkbox" id="seat44" className="seat-checkbox" />
                    <label htmlFor="seat44" className="seat">44</label>

                    <input type="checkbox" id="seat40" className="seat-checkbox" />
                    <label htmlFor="seat40" className="seat">40</label>

                    <input type="checkbox" id="seat36" className="seat-checkbox" />
                    <label htmlFor="seat36" className="seat">36</label>

                    <input type="checkbox" id="seat32" className="seat-checkbox" />
                    <label htmlFor="seat32" className="seat">32</label>

                    <input type="checkbox" id="seat28" className="seat-checkbox" />
                    <label htmlFor="seat28" className="seat">28</label>

                    <input type="checkbox" id="seat24" className="seat-checkbox" />
                    <label htmlFor="seat24" className="seat">24</label>

                    <input type="checkbox" id="seat20" className="seat-checkbox" />
                    <label htmlFor="seat20" className="seat">20</label>

                    <input type="checkbox" id="seat16" className="seat-checkbox" />
                    <label htmlFor="seat16" className="seat">16</label>

                    <input type="checkbox" id="seat12" className="seat-checkbox" />
                    <label htmlFor="seat12" className="seat">12</label>

                    <input type="checkbox" id="seat8" className="seat-checkbox" />
                    <label htmlFor="seat8" className="seat">8</label>

                    <input type="checkbox" id="seat4" className="seat-checkbox" />
                    <label htmlFor="seat4" className="seat">4</label>

                </div>
            </div>

            <div className="legend">
                <div className="legend-item">
                    <span className="legend-color available"></span>
                    <span>Disponible</span>
                </div>
                <div className="legend-item">
                    <span className="legend-color selected"></span>
                    <span>Seleccionado</span>
                </div>
                <div className="legend-item">
                    <span className="legend-color occupied"></span>
                    <span>Ocupado</span>
                </div>
                <div className="legend-item">
                    <span className="legend-color reserved"></span>
                    <span>Reservado</span>
                </div>
            </div>


            <div className="action-buttons">
                <button className="cancel-btn">Cancelar</button>
                <button className="confirm-btn">Confirmar</button>
                
            </div>
        </>
    );
};

export default Seats;
