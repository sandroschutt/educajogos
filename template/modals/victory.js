export default function victoryModal() {
  let modal = `
    <!-- Button trigger modal -->
    <button
    type="button"
    class="btn btn-primary"
    data-toggle="modal"
    data-target="#exampleModal"
    style="display: none"
    >
    Launch demo modal
    </button>

    <!-- Modal -->
    <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content bg-success text-white text-center">
        <div class="modal-header justify-content-center" style="border-bottom: none;">
          <h4 class="modal-title" id="exampleModalLabel">Você venceu</h5>
        </div>
        <div class="modal-body">
          <h1>Parabéns!</h2>
          <div>
            <img src="../../public/img/assets/output-onlinegiftools.gif" alt="Medalha da vitória" style="max-width: 100%;">
          </div>
          <div class="tempo">
            <h4 class="d-inline">Tempo:</h4>
            <h4 class="d-inline tempo-data"></h4>
          </div>
        </div>
        <div class="modal-footer justify-content-center p-3" style="border-top: none;">
          <button
            type="button"
            class="btn btn-info text-white"
            onclick="window.location.reload()"
          >
            Jogar novamente
          </button>
        </div>
      </div>
    </div>
    </div>
`;

$('#modal').append(modal);
}
