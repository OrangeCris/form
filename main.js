import {
    createApp as b
} from "https://cdn.jsdelivr.net/npm/petite-vue?module";
let v;
const L = new Uint8Array(16);

function A() {
    if (!v && (v = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !v)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return v(L)
}
const f = [];
for (let n = 0; n < 256; ++n) f.push((n + 256).toString(16).slice(1));

function D(n, e = 0) {
    return f[n[e + 0]] + f[n[e + 1]] + f[n[e + 2]] + f[n[e + 3]] + "-" + f[n[e + 4]] + f[n[e + 5]] + "-" + f[n[e + 6]] + f[n[e + 7]] + "-" + f[n[e + 8]] + f[n[e + 9]] + "-" + f[n[e + 10]] + f[n[e + 11]] + f[n[e + 12]] + f[n[e + 13]] + f[n[e + 14]] + f[n[e + 15]]
}
const I = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    y = {
        randomUUID: I
    };

function M(n, e, i) {
    if (y.randomUUID && !e && !n) return y.randomUUID();
    n = n || {};
    const t = n.random || (n.rng || A)();
    if (t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, e) {
        i = i || 0;
        for (let s = 0; s < 16; ++s) e[i + s] = t[s];
        return e
    }
    return D(t)
}
var F = C;

function C() {
    var n = [].slice.call(arguments),
        e = !1;
    typeof n[0] == "boolean" && (e = n.shift());
    var i = n[0];
    if (E(i)) throw new Error("extendee must be an object");
    for (var t = n.slice(1), s = t.length, l = 0; l < s; l++) {
        var r = t[l];
        for (var a in r)
            if (Object.prototype.hasOwnProperty.call(r, a)) {
                var u = r[a];
                if (e && R(u)) {
                    var d = Array.isArray(u) ? [] : {};
                    i[a] = C(!0, Object.prototype.hasOwnProperty.call(i, a) && !E(i[a]) ? i[a] : d, u)
                } else i[a] = u
            }
    }
    return i
}

function R(n) {
    return Array.isArray(n) || {}.toString.call(n) == "[object Object]"
}

function E(n) {
    return !n || typeof n != "object" && typeof n != "function"
}

function N(n) {
    return n && n.__esModule ? n.default : n
}
class w {
    on(e, i) {
        return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(i), this
    }
    emit(e, ...i) {
        this._callbacks = this._callbacks || {};
        let t = this._callbacks[e];
        if (t)
            for (let s of t) s.apply(this, i);
        return this.element && this.element.dispatchEvent(this.makeEvent("dropzone:" + e, {
            args: i
        })), this
    }
    makeEvent(e, i) {
        let t = {
            bubbles: !0,
            cancelable: !0,
            detail: i
        };
        if (typeof window.CustomEvent == "function") return new CustomEvent(e, t);
        var s = document.createEvent("CustomEvent");
        return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s
    }
    off(e, i) {
        if (!this._callbacks || arguments.length === 0) return this._callbacks = {}, this;
        let t = this._callbacks[e];
        if (!t) return this;
        if (arguments.length === 1) return delete this._callbacks[e], this;
        for (let s = 0; s < t.length; s++)
            if (t[s] === i) {
                t.splice(s, 1);
                break
            } return this
    }
}
var z = {};
z = `<div class="dz-preview dz-file-preview">
  <div class="dz-image"><img data-dz-thumbnail=""></div>
  <div class="dz-details">
    <div class="dz-size"><span data-dz-size=""></span></div>
    <div class="dz-filename"><span data-dz-name=""></span></div>
  </div>
  <div class="dz-progress">
    <span class="dz-upload" data-dz-uploadprogress=""></span>
  </div>
  <div class="dz-error-message"><span data-dz-errormessage=""></span></div>
  <div class="dz-success-mark">
    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.2071 29.7929L14.2929 25.7071C14.6834 25.3166 15.3166 25.3166 15.7071 25.7071L21.2929 31.2929C21.6834 31.6834 22.3166 31.6834 22.7071 31.2929L38.2929 15.7071C38.6834 15.3166 39.3166 15.3166 39.7071 15.7071L43.7929 19.7929C44.1834 20.1834 44.1834 20.8166 43.7929 21.2071L22.7071 42.2929C22.3166 42.6834 21.6834 42.6834 21.2929 42.2929L10.2071 31.2071C9.81658 30.8166 9.81658 30.1834 10.2071 29.7929Z"></path>
    </svg>
  </div>
  <div class="dz-error-mark">
    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.2929 20.2929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071L13.2071 17.7929C12.8166 18.1834 12.8166 18.8166 13.2071 19.2071L20.2929 26.2929C20.6834 26.6834 20.6834 27.3166 20.2929 27.7071L13.2071 34.7929C12.8166 35.1834 12.8166 35.8166 13.2071 36.2071L17.7929 40.7929C18.1834 41.1834 18.8166 41.1834 19.2071 40.7929L26.2929 33.7071C26.6834 33.3166 27.3166 33.3166 27.7071 33.7071L34.7929 40.7929C35.1834 41.1834 35.8166 41.1834 36.2071 40.7929L40.7929 36.2071C41.1834 35.8166 41.1834 35.1834 40.7929 34.7929L33.7071 27.7071C33.3166 27.3166 33.3166 26.6834 33.7071 26.2929L40.7929 19.2071C41.1834 18.8166 41.1834 18.1834 40.7929 17.7929L36.2071 13.2071C35.8166 12.8166 35.1834 12.8166 34.7929 13.2071L27.7071 20.2929C27.3166 20.6834 26.6834 20.6834 26.2929 20.2929Z"></path>
    </svg>
  </div>
</div>
`;
let _ = {
    url: null,
    method: "post",
    withCredentials: !1,
    timeout: null,
    parallelUploads: 2,
    uploadMultiple: !1,
    chunking: !1,
    forceChunking: !1,
    chunkSize: 2097152,
    parallelChunkUploads: !1,
    retryChunks: !1,
    retryChunksLimit: 3,
    maxFilesize: 256,
    paramName: "file",
    createImageThumbnails: !0,
    maxThumbnailFilesize: 10,
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    thumbnailMethod: "crop",
    resizeWidth: null,
    resizeHeight: null,
    resizeMimeType: null,
    resizeQuality: .8,
    resizeMethod: "contain",
    filesizeBase: 1e3,
    maxFiles: null,
    headers: null,
    defaultHeaders: !0,
    clickable: !0,
    ignoreHiddenFiles: !0,
    acceptedFiles: null,
    acceptedMimeTypes: null,
    autoProcessQueue: !0,
    autoQueue: !0,
    addRemoveLinks: !1,
    previewsContainer: null,
    disablePreviews: !1,
    hiddenInputContainer: "body",
    capture: null,
    renameFilename: null,
    renameFile: null,
    forceFallback: !1,
    dictDefaultMessage: "Drop files here to upload",
    dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
    dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
    dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
    dictInvalidFileType: "You can't upload files of this type.",
    dictResponseError: "Server responded with {{statusCode}} code.",
    dictCancelUpload: "Cancel upload",
    dictUploadCanceled: "Upload canceled.",
    dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
    dictRemoveFile: "Remove file",
    dictRemoveFileConfirmation: null,
    dictMaxFilesExceeded: "You can not upload any more files.",
    dictFileSizeUnits: {
        tb: "TB",
        gb: "GB",
        mb: "MB",
        kb: "KB",
        b: "b"
    },
    init() {},
    params(n, e, i) {
        if (i) return {
            dzuuid: i.file.upload.uuid,
            dzchunkindex: i.index,
            dztotalfilesize: i.file.size,
            dzchunksize: this.options.chunkSize,
            dztotalchunkcount: i.file.upload.totalChunkCount,
            dzchunkbyteoffset: i.index * this.options.chunkSize
        }
    },
    accept(n, e) {
        return e()
    },
    chunksUploaded: function(n, e) {
        e()
    },
    binaryBody: !1,
    fallback() {
        let n;
        this.element.className = `${this.element.className} dz-browser-not-supported`;
        for (let i of this.element.getElementsByTagName("div"))
            if (/(^| )dz-message($| )/.test(i.className)) {
                n = i, i.className = "dz-message";
                break
            } n || (n = o.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(n));
        let e = n.getElementsByTagName("span")[0];
        return e && (e.textContent != null ? e.textContent = this.options.dictFallbackMessage : e.innerText != null && (e.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm())
    },
    resize(n, e, i, t) {
        let s = {
                srcX: 0,
                srcY: 0,
                srcWidth: n.width,
                srcHeight: n.height
            },
            l = n.width / n.height;
        e == null && i == null ? (e = s.srcWidth, i = s.srcHeight) : e == null ? e = i * l : i == null && (i = e / l), e = Math.min(e, s.srcWidth), i = Math.min(i, s.srcHeight);
        let r = e / i;
        if (s.srcWidth > e || s.srcHeight > i)
            if (t === "crop") l > r ? (s.srcHeight = n.height, s.srcWidth = s.srcHeight * r) : (s.srcWidth = n.width, s.srcHeight = s.srcWidth / r);
            else if (t === "contain") l > r ? i = e / l : e = i * l;
        else throw new Error(`Unknown resizeMethod '${t}'`);
        return s.srcX = (n.width - s.srcWidth) / 2, s.srcY = (n.height - s.srcHeight) / 2, s.trgWidth = e, s.trgHeight = i, s
    },
    transformFile(n, e) {
        return (this.options.resizeWidth || this.options.resizeHeight) && n.type.match(/image.*/) ? this.resizeImage(n, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, e) : e(n)
    },
    previewTemplate: N(z),
    drop(n) {
        return this.element.classList.remove("dz-drag-hover")
    },
    dragstart(n) {},
    dragend(n) {
        return this.element.classList.remove("dz-drag-hover")
    },
    dragenter(n) {
        return this.element.classList.add("dz-drag-hover")
    },
    dragover(n) {
        return this.element.classList.add("dz-drag-hover")
    },
    dragleave(n) {
        return this.element.classList.remove("dz-drag-hover")
    },
    paste(n) {},
    reset() {
        return this.element.classList.remove("dz-started")
    },
    addedfile(n) {
        if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer && !this.options.disablePreviews) {
            n.previewElement = o.createElement(this.options.previewTemplate.trim()), n.previewTemplate = n.previewElement, this.previewsContainer.appendChild(n.previewElement);
            for (var e of n.previewElement.querySelectorAll("[data-dz-name]")) e.textContent = n.name;
            for (e of n.previewElement.querySelectorAll("[data-dz-size]")) e.innerHTML = this.filesize(n.size);
            this.options.addRemoveLinks && (n._removeLink = o.createElement(`<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`), n.previewElement.appendChild(n._removeLink));
            let i = t => (t.preventDefault(), t.stopPropagation(), n.status === o.UPLOADING ? o.confirm(this.options.dictCancelUploadConfirmation, () => this.removeFile(n)) : this.options.dictRemoveFileConfirmation ? o.confirm(this.options.dictRemoveFileConfirmation, () => this.removeFile(n)) : this.removeFile(n));
            for (let t of n.previewElement.querySelectorAll("[data-dz-remove]")) t.addEventListener("click", i)
        }
    },
    removedfile(n) {
        return n.previewElement != null && n.previewElement.parentNode != null && n.previewElement.parentNode.removeChild(n.previewElement), this._updateMaxFilesReachedClass()
    },
    thumbnail(n, e) {
        if (n.previewElement) {
            n.previewElement.classList.remove("dz-file-preview");
            for (let i of n.previewElement.querySelectorAll("[data-dz-thumbnail]")) i.alt = n.name, i.src = e;
            return setTimeout(() => n.previewElement.classList.add("dz-image-preview"), 1)
        }
    },
    error(n, e) {
        if (n.previewElement) {
            n.previewElement.classList.add("dz-error"), typeof e != "string" && e.error && (e = e.error);
            for (let i of n.previewElement.querySelectorAll("[data-dz-errormessage]")) i.textContent = e
        }
    },
    errormultiple() {},
    processing(n) {
        if (n.previewElement && (n.previewElement.classList.add("dz-processing"), n._removeLink)) return n._removeLink.innerHTML = this.options.dictCancelUpload
    },
    processingmultiple() {},
    uploadprogress(n, e, i) {
        if (n.previewElement)
            for (let t of n.previewElement.querySelectorAll("[data-dz-uploadprogress]")) t.nodeName === "PROGRESS" ? t.value = e : t.style.width = `${e}%`
    },
    totaluploadprogress() {},
    sending() {},
    sendingmultiple() {},
    success(n) {
        if (n.previewElement) return n.previewElement.classList.add("dz-success")
    },
    successmultiple() {},
    canceled(n) {
        return this.emit("error", n, this.options.dictUploadCanceled)
    },
    canceledmultiple() {},
    complete(n) {
        if (n._removeLink && (n._removeLink.innerHTML = this.options.dictRemoveFile), n.previewElement) return n.previewElement.classList.add("dz-complete")
    },
    completemultiple() {},
    maxfilesexceeded() {},
    maxfilesreached() {},
    queuecomplete() {},
    addedfiles() {}
};
var P = _;
class o extends w {
    static initClass() {
        this.prototype.Emitter = w, this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], this.prototype._thumbnailQueue = [], this.prototype._processingThumbnail = !1
    }
    getAcceptedFiles() {
        return this.files.filter(e => e.accepted).map(e => e)
    }
    getRejectedFiles() {
        return this.files.filter(e => !e.accepted).map(e => e)
    }
    getFilesWithStatus(e) {
        return this.files.filter(i => i.status === e).map(i => i)
    }
    getQueuedFiles() {
        return this.getFilesWithStatus(o.QUEUED)
    }
    getUploadingFiles() {
        return this.getFilesWithStatus(o.UPLOADING)
    }
    getAddedFiles() {
        return this.getFilesWithStatus(o.ADDED)
    }
    getActiveFiles() {
        return this.files.filter(e => e.status === o.UPLOADING || e.status === o.QUEUED).map(e => e)
    }
    init() {
        if (this.element.tagName === "form" && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(o.createElement(`<div class="dz-default dz-message"><button class="dz-button" type="button">${this.options.dictDefaultMessage}</button></div>`)), this.clickableElements.length) {
            let t = () => {
                this.hiddenFileInput && this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = document.createElement("input"), this.hiddenFileInput.setAttribute("type", "file"), (this.options.maxFiles === null || this.options.maxFiles > 1) && this.hiddenFileInput.setAttribute("multiple", "multiple"), this.hiddenFileInput.className = "dz-hidden-input", this.options.acceptedFiles !== null && this.hiddenFileInput.setAttribute("accept", this.options.acceptedFiles), this.options.capture !== null && this.hiddenFileInput.setAttribute("capture", this.options.capture), this.hiddenFileInput.setAttribute("tabindex", "-1"), this.hiddenFileInput.style.visibility = "hidden", this.hiddenFileInput.style.position = "absolute", this.hiddenFileInput.style.top = "0", this.hiddenFileInput.style.left = "0", this.hiddenFileInput.style.height = "0", this.hiddenFileInput.style.width = "0", o.getElement(this.options.hiddenInputContainer, "hiddenInputContainer").appendChild(this.hiddenFileInput), this.hiddenFileInput.addEventListener("change", () => {
                    let {
                        files: s
                    } = this.hiddenFileInput;
                    if (s.length)
                        for (let l of s) this.addFile(l);
                    this.emit("addedfiles", s), t()
                })
            };
            t()
        }
        this.URL = window.URL !== null ? window.URL : window.webkitURL;
        for (let t of this.events) this.on(t, this.options[t]);
        this.on("uploadprogress", () => this.updateTotalUploadProgress()), this.on("removedfile", () => this.updateTotalUploadProgress()), this.on("canceled", t => this.emit("complete", t)), this.on("complete", t => {
            if (this.getAddedFiles().length === 0 && this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) return setTimeout(() => this.emit("queuecomplete"), 0)
        });
        const e = function(t) {
            if (t.dataTransfer.types) {
                for (var s = 0; s < t.dataTransfer.types.length; s++)
                    if (t.dataTransfer.types[s] === "Files") return !0
            }
            return !1
        };
        let i = function(t) {
            if (e(t)) return t.stopPropagation(), t.preventDefault ? t.preventDefault() : t.returnValue = !1
        };
        return this.listeners = [{
            element: this.element,
            events: {
                dragstart: t => this.emit("dragstart", t),
                dragenter: t => (i(t), this.emit("dragenter", t)),
                dragover: t => {
                    let s;
                    try {
                        s = t.dataTransfer.effectAllowed
                    } catch {}
                    return t.dataTransfer.dropEffect = s === "move" || s === "linkMove" ? "move" : "copy", i(t), this.emit("dragover", t)
                },
                dragleave: t => this.emit("dragleave", t),
                drop: t => (i(t), this.drop(t)),
                dragend: t => this.emit("dragend", t)
            }
        }], this.clickableElements.forEach(t => this.listeners.push({
            element: t,
            events: {
                click: s => ((t !== this.element || s.target === this.element || o.elementInside(s.target, this.element.querySelector(".dz-message"))) && this.hiddenFileInput.click(), !0)
            }
        })), this.enable(), this.options.init.call(this)
    }
    destroy() {
        return this.disable(), this.removeAllFiles(!0), this.hiddenFileInput != null && this.hiddenFileInput.parentNode && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, o.instances.splice(o.instances.indexOf(this), 1)
    }
    updateTotalUploadProgress() {
        let e, i = 0,
            t = 0;
        if (this.getActiveFiles().length) {
            for (let l of this.getActiveFiles()) i += l.upload.bytesSent, t += l.upload.total;
            e = 100 * i / t
        } else e = 100;
        return this.emit("totaluploadprogress", e, t, i)
    }
    _getParamName(e) {
        return typeof this.options.paramName == "function" ? this.options.paramName(e) : `${this.options.paramName}${this.options.uploadMultiple?`[${e}]`:""}`
    }
    _renameFile(e) {
        return typeof this.options.renameFile != "function" ? e.name : this.options.renameFile(e)
    }
    getFallbackForm() {
        let e, i;
        if (e = this.getExistingFallback()) return e;
        let t = '<div class="dz-fallback">';
        this.options.dictFallbackText && (t += `<p>${this.options.dictFallbackText}</p>`), t += `<input type="file" name="${this._getParamName(0)}" ${this.options.uploadMultiple?'multiple="multiple"':void 0} /><input type="submit" value="Upload!"></div>`;
        let s = o.createElement(t);
        return this.element.tagName !== "FORM" ? (i = o.createElement(`<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`), i.appendChild(s)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), i ?? s
    }
    getExistingFallback() {
        let e = function(t) {
            for (let s of t)
                if (/(^| )fallback($| )/.test(s.className)) return s
        };
        for (let t of ["div", "form"]) {
            var i;
            if (i = e(this.element.getElementsByTagName(t))) return i
        }
    }
    setupEventListeners() {
        return this.listeners.map(e => (() => {
            let i = [];
            for (let t in e.events) {
                let s = e.events[t];
                i.push(e.element.addEventListener(t, s, !1))
            }
            return i
        })())
    }
    removeEventListeners() {
        return this.listeners.map(e => (() => {
            let i = [];
            for (let t in e.events) {
                let s = e.events[t];
                i.push(e.element.removeEventListener(t, s, !1))
            }
            return i
        })())
    }
    disable() {
        return this.clickableElements.forEach(e => e.classList.remove("dz-clickable")), this.removeEventListeners(), this.disabled = !0, this.files.map(e => this.cancelUpload(e))
    }
    enable() {
        return delete this.disabled, this.clickableElements.forEach(e => e.classList.add("dz-clickable")), this.setupEventListeners()
    }
    filesize(e) {
        let i = 0,
            t = "b";
        if (e > 0) {
            let s = ["tb", "gb", "mb", "kb", "b"];
            for (let l = 0; l < s.length; l++) {
                let r = s[l],
                    a = Math.pow(this.options.filesizeBase, 4 - l) / 10;
                if (e >= a) {
                    i = e / Math.pow(this.options.filesizeBase, 4 - l), t = r;
                    break
                }
            }
            i = Math.round(10 * i) / 10
        }
        return `<strong>${i}</strong> ${this.options.dictFileSizeUnits[t]}`
    }
    _updateMaxFilesReachedClass() {
        return this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
    }
    drop(e) {
        if (!e.dataTransfer) return;
        this.emit("drop", e);
        let i = [];
        for (let t = 0; t < e.dataTransfer.files.length; t++) i[t] = e.dataTransfer.files[t];
        if (i.length) {
            let {
                items: t
            } = e.dataTransfer;
            t && t.length && t[0].webkitGetAsEntry != null ? this._addFilesFromItems(t) : this.handleFiles(i)
        }
        this.emit("addedfiles", i)
    }
    paste(e) {
        if (W(e != null ? e.clipboardData : void 0, t => t.items) == null) return;
        this.emit("paste", e);
        let {
            items: i
        } = e.clipboardData;
        if (i.length) return this._addFilesFromItems(i)
    }
    handleFiles(e) {
        for (let i of e) this.addFile(i)
    }
    _addFilesFromItems(e) {
        return (() => {
            let i = [];
            for (let s of e) {
                var t;
                s.webkitGetAsEntry != null && (t = s.webkitGetAsEntry()) ? t.isFile ? i.push(this.addFile(s.getAsFile())) : t.isDirectory ? i.push(this._addFilesFromDirectory(t, t.name)) : i.push(void 0) : s.getAsFile != null && (s.kind == null || s.kind === "file") ? i.push(this.addFile(s.getAsFile())) : i.push(void 0)
            }
            return i
        })()
    }
    _addFilesFromDirectory(e, i) {
        let t = e.createReader(),
            s = r => Q(console, "log", a => a.log(r));
        var l = () => t.readEntries(r => {
            if (r.length > 0) {
                for (let a of r) a.isFile ? a.file(u => {
                    if (!(this.options.ignoreHiddenFiles && u.name.substring(0, 1) === ".")) return u.fullPath = `${i}/${u.name}`, this.addFile(u)
                }) : a.isDirectory && this._addFilesFromDirectory(a, `${i}/${a.name}`);
                l()
            }
            return null
        }, s);
        return l()
    }
    accept(e, i) {
        this.options.maxFilesize && e.size > this.options.maxFilesize * 1048576 ? i(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : o.isValidFile(e, this.options.acceptedFiles) ? this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles ? (i(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, i) : i(this.options.dictInvalidFileType)
    }
    addFile(e) {
        e.upload = {
            uuid: o.uuidv4(),
            progress: 0,
            total: e.size,
            bytesSent: 0,
            filename: this._renameFile(e)
        }, this.files.push(e), e.status = o.ADDED, this.emit("addedfile", e), this._enqueueThumbnail(e), this.accept(e, i => {
            i ? (e.accepted = !1, this._errorProcessing([e], i)) : (e.accepted = !0, this.options.autoQueue && this.enqueueFile(e)), this._updateMaxFilesReachedClass()
        })
    }
    enqueueFiles(e) {
        for (let i of e) this.enqueueFile(i);
        return null
    }
    enqueueFile(e) {
        if (e.status === o.ADDED && e.accepted === !0) {
            if (e.status = o.QUEUED, this.options.autoProcessQueue) return setTimeout(() => this.processQueue(), 0)
        } else throw new Error("This file can't be queued because it has already been processed or was rejected.")
    }
    _enqueueThumbnail(e) {
        if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= this.options.maxThumbnailFilesize * 1048576) return this._thumbnailQueue.push(e), setTimeout(() => this._processThumbnailQueue(), 0)
    }
    _processThumbnailQueue() {
        if (this._processingThumbnail || this._thumbnailQueue.length === 0) return;
        this._processingThumbnail = !0;
        let e = this._thumbnailQueue.shift();
        return this.createThumbnail(e, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, i => (this.emit("thumbnail", e, i), this._processingThumbnail = !1, this._processThumbnailQueue()))
    }
    removeFile(e) {
        if (e.status === o.UPLOADING && this.cancelUpload(e), this.files = H(this.files, e), this.emit("removedfile", e), this.files.length === 0) return this.emit("reset")
    }
    removeAllFiles(e) {
        e == null && (e = !1);
        for (let i of this.files.slice())(i.status !== o.UPLOADING || e) && this.removeFile(i);
        return null
    }
    resizeImage(e, i, t, s, l) {
        return this.createThumbnail(e, i, t, s, !0, (r, a) => {
            if (a == null) return l(e);
            {
                let {
                    resizeMimeType: u
                } = this.options;
                u == null && (u = e.type);
                let d = a.toDataURL(u, this.options.resizeQuality);
                return (u === "image/jpeg" || u === "image/jpg") && (d = x.restore(e.dataURL, d)), l(o.dataURItoBlob(d))
            }
        })
    }
    createThumbnail(e, i, t, s, l, r) {
        let a = new FileReader;
        a.onload = () => {
            if (e.dataURL = a.result, e.type === "image/svg+xml") {
                r != null && r(a.result);
                return
            }
            this.createThumbnailFromUrl(e, i, t, s, l, r)
        }, a.readAsDataURL(e)
    }
    displayExistingFile(e, i, t, s, l = !0) {
        if (this.emit("addedfile", e), this.emit("complete", e), !l) this.emit("thumbnail", e, i), t && t();
        else {
            let r = a => {
                this.emit("thumbnail", e, a), t && t()
            };
            e.dataURL = i, this.createThumbnailFromUrl(e, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, r, s)
        }
    }
    createThumbnailFromUrl(e, i, t, s, l, r, a) {
        let u = document.createElement("img");
        return a && (u.crossOrigin = a), l = getComputedStyle(document.body).imageOrientation == "from-image" ? !1 : l, u.onload = () => {
            let d = h => h(1);
            return typeof EXIF < "u" && EXIF !== null && l && (d = h => EXIF.getData(u, function() {
                return h(EXIF.getTag(this, "Orientation"))
            })), d(h => {
                e.width = u.width, e.height = u.height;
                let p = this.options.resize.call(this, e, i, t, s),
                    c = document.createElement("canvas"),
                    m = c.getContext("2d");
                switch (c.width = p.trgWidth, c.height = p.trgHeight, h > 4 && (c.width = p.trgHeight, c.height = p.trgWidth), h) {
                    case 2:
                        m.translate(c.width, 0), m.scale(-1, 1);
                        break;
                    case 3:
                        m.translate(c.width, c.height), m.rotate(Math.PI);
                        break;
                    case 4:
                        m.translate(0, c.height), m.scale(1, -1);
                        break;
                    case 5:
                        m.rotate(.5 * Math.PI), m.scale(1, -1);
                        break;
                    case 6:
                        m.rotate(.5 * Math.PI), m.translate(0, -c.width);
                        break;
                    case 7:
                        m.rotate(.5 * Math.PI), m.translate(c.height, -c.width), m.scale(-1, 1);
                        break;
                    case 8:
                        m.rotate(-.5 * Math.PI), m.translate(-c.height, 0);
                        break
                }
                q(m, u, p.srcX != null ? p.srcX : 0, p.srcY != null ? p.srcY : 0, p.srcWidth, p.srcHeight, p.trgX != null ? p.trgX : 0, p.trgY != null ? p.trgY : 0, p.trgWidth, p.trgHeight);
                let T = c.toDataURL("image/png");
                if (r != null) return r(T, c)
            })
        }, r != null && (u.onerror = r), u.src = e.dataURL
    }
    processQueue() {
        let {
            parallelUploads: e
        } = this.options, i = this.getUploadingFiles().length, t = i;
        if (i >= e) return;
        let s = this.getQueuedFiles();
        if (s.length > 0) {
            if (this.options.uploadMultiple) return this.processFiles(s.slice(0, e - i));
            for (; t < e;) {
                if (!s.length) return;
                this.processFile(s.shift()), t++
            }
        }
    }
    processFile(e) {
        return this.processFiles([e])
    }
    processFiles(e) {
        for (let i of e) i.processing = !0, i.status = o.UPLOADING, this.emit("processing", i);
        return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e)
    }
    _getFilesWithXhr(e) {
        return this.files.filter(i => i.xhr === e).map(i => i)
    }
    cancelUpload(e) {
        if (e.status === o.UPLOADING) {
            let i = this._getFilesWithXhr(e.xhr);
            for (let t of i) t.status = o.CANCELED;
            typeof e.xhr < "u" && e.xhr.abort();
            for (let t of i) this.emit("canceled", t);
            this.options.uploadMultiple && this.emit("canceledmultiple", i)
        } else(e.status === o.ADDED || e.status === o.QUEUED) && (e.status = o.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e]));
        if (this.options.autoProcessQueue) return this.processQueue()
    }
    resolveOption(e, ...i) {
        return typeof e == "function" ? e.apply(this, i) : e
    }
    uploadFile(e) {
        return this.uploadFiles([e])
    }
    uploadFiles(e) {
        this._transformFiles(e, i => {
            if (this.options.chunking) {
                let t = i[0];
                e[0].upload.chunked = this.options.chunking && (this.options.forceChunking || t.size > this.options.chunkSize), e[0].upload.totalChunkCount = Math.ceil(t.size / this.options.chunkSize)
            }
            if (e[0].upload.chunked) {
                let t = e[0],
                    s = i[0];
                t.upload.chunks = [];
                let l = () => {
                    let r = 0;
                    for (; t.upload.chunks[r] !== void 0;) r++;
                    if (r >= t.upload.totalChunkCount) return;
                    let a = r * this.options.chunkSize,
                        u = Math.min(a + this.options.chunkSize, s.size),
                        d = {
                            name: this._getParamName(0),
                            data: s.webkitSlice ? s.webkitSlice(a, u) : s.slice(a, u),
                            filename: t.upload.filename,
                            chunkIndex: r
                        };
                    t.upload.chunks[r] = {
                        file: t,
                        index: r,
                        dataBlock: d,
                        status: o.UPLOADING,
                        progress: 0,
                        retries: 0
                    }, this._uploadData(e, [d])
                };
                if (t.upload.finishedChunkUpload = (r, a) => {
                        let u = !0;
                        r.status = o.SUCCESS, r.dataBlock = null, r.response = r.xhr.responseText, r.responseHeaders = r.xhr.getAllResponseHeaders(), r.xhr = null;
                        for (let d = 0; d < t.upload.totalChunkCount; d++) {
                            if (t.upload.chunks[d] === void 0) return l();
                            t.upload.chunks[d].status !== o.SUCCESS && (u = !1)
                        }
                        u && this.options.chunksUploaded(t, () => {
                            this._finished(e, a, null)
                        })
                    }, this.options.parallelChunkUploads)
                    for (let r = 0; r < t.upload.totalChunkCount; r++) l();
                else l()
            } else {
                let t = [];
                for (let s = 0; s < e.length; s++) t[s] = {
                    name: this._getParamName(s),
                    data: i[s],
                    filename: e[s].upload.filename
                };
                this._uploadData(e, t)
            }
        })
    }
    _getChunk(e, i) {
        for (let t = 0; t < e.upload.totalChunkCount; t++)
            if (e.upload.chunks[t] !== void 0 && e.upload.chunks[t].xhr === i) return e.upload.chunks[t]
    }
    _uploadData(e, i) {
        let t = new XMLHttpRequest;
        for (let d of e) d.xhr = t;
        e[0].upload.chunked && (e[0].upload.chunks[i[0].chunkIndex].xhr = t);
        let s = this.resolveOption(this.options.method, e, i),
            l = this.resolveOption(this.options.url, e, i);
        t.open(s, l, !0), this.resolveOption(this.options.timeout, e) && (t.timeout = this.resolveOption(this.options.timeout, e)), t.withCredentials = !!this.options.withCredentials, t.onload = d => {
            this._finishedUploading(e, t, d)
        }, t.ontimeout = () => {
            this._handleUploadError(e, t, `Request timedout after ${this.options.timeout/1e3} seconds`)
        }, t.onerror = () => {
            this._handleUploadError(e, t)
        };
        let a = t.upload != null ? t.upload : t;
        a.onprogress = d => this._updateFilesUploadProgress(e, t, d);
        let u = this.options.defaultHeaders ? {
            Accept: "application/json",
            "Cache-Control": "no-cache",
            "X-Requested-With": "XMLHttpRequest"
        } : {};
        this.options.binaryBody && (u["Content-Type"] = e[0].type), this.options.headers && F(u, this.options.headers);
        for (let d in u) {
            let h = u[d];
            h && t.setRequestHeader(d, h)
        }
        if (this.options.binaryBody) {
            for (let d of e) this.emit("sending", d, t);
            this.options.uploadMultiple && this.emit("sendingmultiple", e, t), this.submitRequest(t, null, e)
        } else {
            let d = new FormData;
            if (this.options.params) {
                let h = this.options.params;
                typeof h == "function" && (h = h.call(this, e, t, e[0].upload.chunked ? this._getChunk(e[0], t) : null));
                for (let p in h) {
                    let c = h[p];
                    if (Array.isArray(c))
                        for (let m = 0; m < c.length; m++) d.append(p, c[m]);
                    else d.append(p, c)
                }
            }
            for (let h of e) this.emit("sending", h, t, d);
            this.options.uploadMultiple && this.emit("sendingmultiple", e, t, d), this._addFormElementData(d);
            for (let h = 0; h < i.length; h++) {
                let p = i[h];
                d.append(p.name, p.data, p.filename)
            }
            this.submitRequest(t, d, e)
        }
    }
    _transformFiles(e, i) {
        let t = [],
            s = 0;
        for (let l = 0; l < e.length; l++) this.options.transformFile.call(this, e[l], r => {
            t[l] = r, ++s === e.length && i(t)
        })
    }
    _addFormElementData(e) {
        if (this.element.tagName === "FORM")
            for (let i of this.element.querySelectorAll("input, textarea, select, button")) {
                let t = i.getAttribute("name"),
                    s = i.getAttribute("type");
                if (s && (s = s.toLowerCase()), !(typeof t > "u" || t === null))
                    if (i.tagName === "SELECT" && i.hasAttribute("multiple"))
                        for (let l of i.options) l.selected && e.append(t, l.value);
                    else(!s || s !== "checkbox" && s !== "radio" || i.checked) && e.append(t, i.value)
            }
    }
    _updateFilesUploadProgress(e, i, t) {
        if (e[0].upload.chunked) {
            let s = e[0],
                l = this._getChunk(s, i);
            t ? (l.progress = 100 * t.loaded / t.total, l.total = t.total, l.bytesSent = t.loaded) : (l.progress = 100, l.bytesSent = l.total), s.upload.progress = 0, s.upload.total = 0, s.upload.bytesSent = 0;
            for (let r = 0; r < s.upload.totalChunkCount; r++) s.upload.chunks[r] && typeof s.upload.chunks[r].progress < "u" && (s.upload.progress += s.upload.chunks[r].progress, s.upload.total += s.upload.chunks[r].total, s.upload.bytesSent += s.upload.chunks[r].bytesSent);
            s.upload.progress = s.upload.progress / s.upload.totalChunkCount, this.emit("uploadprogress", s, s.upload.progress, s.upload.bytesSent)
        } else
            for (let s of e) s.upload.total && s.upload.bytesSent && s.upload.bytesSent == s.upload.total || (t ? (s.upload.progress = 100 * t.loaded / t.total, s.upload.total = t.total, s.upload.bytesSent = t.loaded) : (s.upload.progress = 100, s.upload.bytesSent = s.upload.total), this.emit("uploadprogress", s, s.upload.progress, s.upload.bytesSent))
    }
    _finishedUploading(e, i, t) {
        let s;
        if (e[0].status !== o.CANCELED && i.readyState === 4) {
            if (i.responseType !== "arraybuffer" && i.responseType !== "blob" && (s = i.responseText, i.getResponseHeader("content-type") && ~i.getResponseHeader("content-type").indexOf("application/json"))) try {
                s = JSON.parse(s)
            } catch (l) {
                t = l, s = "Invalid JSON response from server."
            }
            this._updateFilesUploadProgress(e, i), 200 <= i.status && i.status < 300 ? e[0].upload.chunked ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], i), s) : this._finished(e, s, t) : this._handleUploadError(e, i, s)
        }
    }
    _handleUploadError(e, i, t) {
        if (e[0].status !== o.CANCELED) {
            if (e[0].upload.chunked && this.options.retryChunks) {
                let s = this._getChunk(e[0], i);
                if (s.retries++ < this.options.retryChunksLimit) {
                    this._uploadData(e, [s.dataBlock]);
                    return
                } else console.warn("Retried this chunk too often. Giving up.")
            }
            this._errorProcessing(e, t || this.options.dictResponseError.replace("{{statusCode}}", i.status), i)
        }
    }
    submitRequest(e, i, t) {
        if (e.readyState != 1) {
            console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");
            return
        }
        if (this.options.binaryBody)
            if (t[0].upload.chunked) {
                const s = this._getChunk(t[0], e);
                e.send(s.dataBlock.data)
            } else e.send(t[0]);
        else e.send(i)
    }
    _finished(e, i, t) {
        for (let s of e) s.status = o.SUCCESS, this.emit("success", s, i, t), this.emit("complete", s);
        if (this.options.uploadMultiple && (this.emit("successmultiple", e, i, t), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
    }
    _errorProcessing(e, i, t) {
        for (let s of e) s.status = o.ERROR, this.emit("error", s, i, t), this.emit("complete", s);
        if (this.options.uploadMultiple && (this.emit("errormultiple", e, i, t), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
    }
    static uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            let i = Math.random() * 16 | 0;
            return (e === "x" ? i : i & 3 | 8).toString(16)
        })
    }
    constructor(e, i) {
        super();
        let t, s;
        if (this.element = e, this.clickableElements = [], this.listeners = [], this.files = [], typeof this.element == "string" && (this.element = document.querySelector(this.element)), !this.element || this.element.nodeType == null) throw new Error("Invalid dropzone element.");
        if (this.element.dropzone) throw new Error("Dropzone already attached.");
        o.instances.push(this), this.element.dropzone = this;
        let l = (s = o.optionsForElement(this.element)) != null ? s : {};
        if (this.options = F(!0, {}, P, l, i ?? {}), this.options.previewTemplate = this.options.previewTemplate.replace(/\n*/g, ""), this.options.forceFallback || !o.isBrowserSupported()) return this.options.fallback.call(this);
        if (this.options.url == null && (this.options.url = this.element.getAttribute("action")), !this.options.url) throw new Error("No URL provided.");
        if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
        if (this.options.uploadMultiple && this.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
        if (this.options.binaryBody && this.options.uploadMultiple) throw new Error("You cannot set both: binaryBody and uploadMultiple.");
        this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), this.options.renameFilename != null && (this.options.renameFile = r => this.options.renameFilename.call(this, r.name, r)), typeof this.options.method == "string" && (this.options.method = this.options.method.toUpperCase()), (t = this.getExistingFallback()) && t.parentNode && t.parentNode.removeChild(t), this.options.previewsContainer !== !1 && (this.options.previewsContainer ? this.previewsContainer = o.getElement(this.options.previewsContainer, "previewsContainer") : this.previewsContainer = this.element), this.options.clickable && (this.options.clickable === !0 ? this.clickableElements = [this.element] : this.clickableElements = o.getElements(this.options.clickable, "clickable")), this.init()
    }
}
o.initClass();
o.options = {};
o.optionsForElement = function(n) {
    if (n.getAttribute("id")) return o.options[B(n.getAttribute("id"))]
};
o.instances = [];
o.forElement = function(n) {
    if (typeof n == "string" && (n = document.querySelector(n)), (n != null ? n.dropzone : void 0) == null) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    return n.dropzone
};
o.discover = function() {
    let n;
    if (document.querySelectorAll) n = document.querySelectorAll(".dropzone");
    else {
        n = [];
        let e = i => (() => {
            let t = [];
            for (let s of i) /(^| )dropzone($| )/.test(s.className) ? t.push(n.push(s)) : t.push(void 0);
            return t
        })();
        e(document.getElementsByTagName("div")), e(document.getElementsByTagName("form"))
    }
    return (() => {
        let e = [];
        for (let i of n) o.optionsForElement(i) !== !1 ? e.push(new o(i)) : e.push(void 0);
        return e
    })()
};
o.blockedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i];
o.isBrowserSupported = function() {
    let n = !0;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
        if (!("classList" in document.createElement("a"))) n = !1;
        else {
            o.blacklistedBrowsers !== void 0 && (o.blockedBrowsers = o.blacklistedBrowsers);
            for (let e of o.blockedBrowsers)
                if (e.test(navigator.userAgent)) {
                    n = !1;
                    continue
                }
        }
    else n = !1;
    return n
};
o.dataURItoBlob = function(n) {
    let e = atob(n.split(",")[1]),
        i = n.split(",")[0].split(":")[1].split(";")[0],
        t = new ArrayBuffer(e.length),
        s = new Uint8Array(t);
    for (let l = 0, r = e.length, a = 0 <= r; a ? l <= r : l >= r; a ? l++ : l--) s[l] = e.charCodeAt(l);
    return new Blob([t], {
        type: i
    })
};
const H = (n, e) => n.filter(i => i !== e).map(i => i),
    B = n => n.replace(/[\-_](\w)/g, e => e.charAt(1).toUpperCase());
o.createElement = function(n) {
    let e = document.createElement("div");
    return e.innerHTML = n, e.childNodes[0]
};
o.elementInside = function(n, e) {
    if (n === e) return !0;
    for (; n = n.parentNode;)
        if (n === e) return !0;
    return !1
};
o.getElement = function(n, e) {
    let i;
    if (typeof n == "string" ? i = document.querySelector(n) : n.nodeType != null && (i = n), i == null) throw new Error(`Invalid \`${e}\` option provided. Please provide a CSS selector or a plain HTML element.`);
    return i
};
o.getElements = function(n, e) {
    let i, t;
    if (n instanceof Array) {
        t = [];
        try {
            for (i of n) t.push(this.getElement(i, e))
        } catch {
            t = null
        }
    } else if (typeof n == "string") {
        t = [];
        for (i of document.querySelectorAll(n)) t.push(i)
    } else n.nodeType != null && (t = [n]);
    if (t == null || !t.length) throw new Error(`Invalid \`${e}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`);
    return t
};
o.confirm = function(n, e, i) {
    if (window.confirm(n)) return e();
    if (i != null) return i()
};
o.isValidFile = function(n, e) {
    if (!e) return !0;
    e = e.split(",");
    let i = n.type,
        t = i.replace(/\/.*$/, "");
    for (let s of e)
        if (s = s.trim(), s.charAt(0) === ".") {
            if (n.name.toLowerCase().indexOf(s.toLowerCase(), n.name.length - s.length) !== -1) return !0
        } else if (/\/\*$/.test(s)) {
        if (t === s.replace(/\/.*$/, "")) return !0
    } else if (i === s) return !0;
    return !1
};
typeof jQuery < "u" && jQuery !== null && (jQuery.fn.dropzone = function(n) {
    return this.each(function() {
        return new o(this, n)
    })
});
o.ADDED = "added";
o.QUEUED = "queued";
o.ACCEPTED = o.QUEUED;
o.UPLOADING = "uploading";
o.PROCESSING = o.UPLOADING;
o.CANCELED = "canceled";
o.ERROR = "error";
o.SUCCESS = "success";
let O = function(n) {
    n.naturalWidth;
    let e = n.naturalHeight,
        i = document.createElement("canvas");
    i.width = 1, i.height = e;
    let t = i.getContext("2d");
    t.drawImage(n, 0, 0);
    let {
        data: s
    } = t.getImageData(1, 0, 1, e), l = 0, r = e, a = e;
    for (; a > l;) s[(a - 1) * 4 + 3] === 0 ? r = a : l = a, a = r + l >> 1;
    let u = a / e;
    return u === 0 ? 1 : u
};
var q = function(n, e, i, t, s, l, r, a, u, d) {
    let h = O(e);
    return n.drawImage(e, i, t, s, l, r, a, u, d / h)
};
class x {
    static initClass() {
        this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
    static encode64(e) {
        let i = "",
            t, s, l = "",
            r, a, u, d = "",
            h = 0;
        for (; t = e[h++], s = e[h++], l = e[h++], r = t >> 2, a = (t & 3) << 4 | s >> 4, u = (s & 15) << 2 | l >> 6, d = l & 63, isNaN(s) ? u = d = 64 : isNaN(l) && (d = 64), i = i + this.KEY_STR.charAt(r) + this.KEY_STR.charAt(a) + this.KEY_STR.charAt(u) + this.KEY_STR.charAt(d), t = s = l = "", r = a = u = d = "", h < e.length;);
        return i
    }
    static restore(e, i) {
        if (!e.match("data:image/jpeg;base64,")) return i;
        let t = this.decode64(e.replace("data:image/jpeg;base64,", "")),
            s = this.slice2Segments(t),
            l = this.exifManipulation(i, s);
        return `data:image/jpeg;base64,${this.encode64(l)}`
    }
    static exifManipulation(e, i) {
        let t = this.getExifArray(i),
            s = this.insertExif(e, t);
        return new Uint8Array(s)
    }
    static getExifArray(e) {
        let i, t = 0;
        for (; t < e.length;) {
            if (i = e[t], i[0] === 255 & i[1] === 225) return i;
            t++
        }
        return []
    }
    static insertExif(e, i) {
        let t = e.replace("data:image/jpeg;base64,", ""),
            s = this.decode64(t),
            l = s.indexOf(255, 3),
            r = s.slice(0, l),
            a = s.slice(l),
            u = r;
        return u = u.concat(i), u = u.concat(a), u
    }
    static slice2Segments(e) {
        let i = 0,
            t = [];
        for (;;) {
            var s;
            if (e[i] === 255 & e[i + 1] === 218) break;
            if (e[i] === 255 & e[i + 1] === 216) i += 2;
            else {
                s = e[i + 2] * 256 + e[i + 3];
                let l = i + s + 2,
                    r = e.slice(i, l);
                t.push(r), i = l
            }
            if (i > e.length) break
        }
        return t
    }
    static decode64(e) {
        let i, t, s = "",
            l, r, a, u = "",
            d = 0,
            h = [];
        for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && console.warn(`There were invalid base64 characters in the input text.
Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='
Expect errors in decoding.`), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l = this.KEY_STR.indexOf(e.charAt(d++)), r = this.KEY_STR.indexOf(e.charAt(d++)), a = this.KEY_STR.indexOf(e.charAt(d++)), u = this.KEY_STR.indexOf(e.charAt(d++)), i = l << 2 | r >> 4, t = (r & 15) << 4 | a >> 2, s = (a & 3) << 6 | u, h.push(i), a !== 64 && h.push(t), u !== 64 && h.push(s), i = t = s = "", l = r = a = u = "", d < e.length;);
        return h
    }
}
x.initClass();

function W(n, e) {
    return typeof n < "u" && n !== null ? e(n) : void 0
}

function Q(n, e, i) {
    if (typeof n < "u" && n !== null && typeof n[e] == "function") return i(n, e)
}
let g = "";
const S = new URLSearchParams(window.location.search),
    U = S.get("doneall"),
    k = S.get("skip"),
    G = sessionStorage.getItem("user-register-id");
if (U === "true") sessionStorage.removeItem("user-register-id"), g = "";
else if (G === null) {
    const n = M();
    sessionStorage.setItem("user-register-id", n), g = n
} else g = sessionStorage.getItem("user-register-id");
b({
    activeGroupIndex: k !== "true" ? 0 : 3,
    nextDisabled: !0,
    userID: g,
    skipQuestions: k,
    groupSelections: [{
        value: ""
    }, {
        value: ""
    }, {
        value: ""
    }],
    initializeDropzone() {
        new o("#dropzone", {
            url: "https://hook.eu2.make.com/5xm3blndu1kys4bgzb64ffravefcnkd9",
            maxFiles: 7,
            acceptedFiles: "image/* , .pdf , .doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            parallelUploads: 1,
            maxFilesize: 10
        }).on("sending", function(e, i, t) {
            t.append("userID", g)
        }), document.querySelector(".dz-button").innerHTML = "FÃ¼r Upload klicken"
    },
    set nextDisabledValue(n) {
        this.nextDisabled = n
    },
    get nextDisabledValue() {
        return this.nextDisabled
    },
    get nextGroupActive() {
        if (this.activeGroupIndex !== 3) return this.groupSelections[this.activeGroupIndex].value !== ""
    },
    setRadioStyle(n, e, i) {
        const t = n.previousElementSibling;
        e === this.groupSelections[i].value ? t.classList.add("w--redirected-checked") : t.classList.remove("w--redirected-checked")
    },
    nextGroup() {
        this.activeGroupIndex < 3 && (window.scrollTo({
            top: 0,
            behavior: "smooth"
        }), this.activeGroupIndex++, this.nextGroupActive === !1 && (this.nextDisabledValue = !0))
    },
    previousGroup() {
        this.activeGroupIndex >= 1 && (this.activeGroupIndex--, this.nextDisabledValue = !1, window.scrollTo({
            top: 0,
            behavior: "smooth"
        }))
    },
    get activeGroup() {
        return this.activeGroupIndex
    }
}).mount("#main-register-app");
b({
    activeWeekdays: [],
    checkoutHideTimePicker: U,
    userID: g,
    async setWeekday(n, e, i) {
        n.srcElement.checked === !0 && this.activeWeekdays.push({
            name: e,
            index: i
        }), n.srcElement.checked === !1 && (this.activeWeekdays = this.activeWeekdays.filter(t => t.name !== e))
    },
    get Weekdays() {
        return this.activeWeekdays.sort((n, e) => n.index - e.index)
    }
}).mount("#checkout-register-app");
