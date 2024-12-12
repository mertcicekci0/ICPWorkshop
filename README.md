# ICPWorkshop




# Blockchain Day Journal (Blok Zinciri Günlüğü)

**Blockchain Day Journal** (Blok Zinciri Günlüğü), kullanıcıların günlüklerini güvenli ve değiştirilemez bir şekilde **blockchain** üzerinde tutmalarını sağlayan bir projedir. Kullanıcılar, her gün için notlarını, hissettiklerini, favori şarkılarını, izledikleri filmleri, okudukları kitapları ve daha fazlasını blockchain üzerinde kaydederler. Yıl sonunda, tüm günlük verilerinin kilidi açılır ve kullanıcılar geçmişteki tüm notlarını görebilirler.

---

## **Proje Hedefi**

Bu proje, dijital günlüğünüzü **blockchain** teknolojisini kullanarak kaydetmenizi sağlar. Amacı, günlük verilerinin güvenli bir şekilde saklanmasını sağlamak, kullanıcıların gelişimlerini izlemelerine olanak tanımak ve verilerin yalnızca kullanıcıların belirlediği zaman diliminde erişilebilir olmasını sağlamaktır.

---

## **Özellikler**

1. **Günlük Yazma**
   - Kullanıcılar, her gün için yazdıkları metinlerde tarih, duygular, favori şarkı, hedefler, izledikleri filmler, okudukları kitaplar ve öğrenilen dersler gibi bilgileri girerler.
   
2. **Veri Saklama**
   - Kullanıcıların günlükleri **blockchain** üzerinde saklanır. Bu sayede veriler güvenli bir şekilde depolanır ve değiştirilemez olur.

3. **Kilitleme Sistemi**
   - Her günün verisi başlangıçta kilitli olacak şekilde saklanır. Kullanıcılar, o günün verilerini yazabilirler, ancak yalnızca yılbaşı günü (31 Aralık), tüm geçmiş verilerinin kilidi açılacaktır.

4. **NFT ve Blockchain**
   - Her günlük kaydı bir **NFT** olarak saklanır. Kullanıcılar günlüklerini görselleştirebilir ve paylaşabilirler.

5. **Yılbaşı Günü Kilit Açma**
   - Yılbaşı günü (31 Aralık), tüm kilitler açılır ve kullanıcılar bir yıl boyunca yazdıkları tüm günlükleri görebilirler.

6. **Bildirim ve Hatırlatma Sistemi**
   - Kullanıcılar her gün yazmayı unutmasınlar diye bildirimler alacaklardır.

---

## **Teknolojiler**

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Motoko (DFINITY Canister)
- **Blockchain**: DFINITY Internet Computer

---

## **Proje Yapısı**

Proje aşağıdaki dosya yapısına sahiptir:

```
project-folder/
├── assets/
│   ├── images/ (UI resimleri)
│   ├── icons/ (ikonlar için)
├── css/
│   ├── reset.css (CSS reset)
│   ├── style.css (temel stil dosyası)
│   ├── themes.css (temalar için stil)
├── js/
│   ├── api/
│   │   └── backend.js (backend entegrasyonu)
│   ├── ui/
│   │   └── components.js (UI bileşenleri)
│   └── main.js (ana script)
├── index.html (HTML ana dosyası)
└── motoko/
    └── blockchain_day_journal.mo (Motoko backend kodu)
```

---

## **Kurulum ve Çalıştırma**

### 1. **Frontend (HTML, CSS, JavaScript) Kurulumu:**

1. Bu projeyi bilgisayarınıza indirin.
2. `index.html` dosyasını tarayıcınızda açın. Frontend kısmı HTML, CSS ve JavaScript kullanılarak geliştirilmiştir.

### 2. **Backend (Motoko) Kurulumu:**

Backend, DFINITY üzerinde çalışan Motoko kodları ile yazılmıştır. DFINITY canister'ınızı dağıtmak için aşağıdaki adımları takip edebilirsiniz:

#### 2.1 DFINITY SDK Kurulumu

1. [DFINITY SDK](https://sdk.dfinity.org/docs/index.html) adresinden SDK’yı indirip kurun.
2. `dfx` komutunu kullanarak DFINITY ağında canister’ınızı dağıtmak için şu komutları izleyin:
   ```bash
   dfx new blockchain-day-journal
   cd blockchain-day-journal
   dfx deploy
   ```

#### 2.2 Backend Dağıtımı

- **Motoko kodu**, `motoko/blockchain_day_journal.mo` dosyasındaki aktör fonksiyonları ile günlük verilerini saklar.
- **Canister’ı Dağıtmak** için terminalde `dfx deploy` komutunu kullanarak backend’i DFINITY ağına yükleyin.
- **API Bağlantıları** için frontend'deki `backend.js` dosyasındaki `BACKEND_URL` kısmını, dağıttığınız canister’ın URL’si ile güncelleyin.

---

## **Kullanım**

### 1. **Yeni Günlük Girişi Eklemek:**

- Uygulamayı açın.
- Kullanıcı adı girin.
- Tarih, duygular, favori şarkı, hedefler, izlediğiniz filmler, okuduğunuz kitaplar ve öğrendiğiniz dersler gibi bilgileri girin.
- "Add Entry" butonuna tıklayarak günlük kaydınızı blockchain üzerinde saklayın.

### 2. **Geçmiş Günlüklerini Görüntülemek:**

- Yılbaşı günü (31 Aralık), tüm günlüklerin kilidi açılır ve geçmiş tüm verilerinizi görüntüleyebilirsiniz.

---

## **Backend API’leri**

Proje, Motoko backend kullanarak aşağıdaki API'lere sahiptir:

- `POST /addEntry`: Yeni bir günlük ekler.
- `GET /getEntries`: Kullanıcının tüm günlüklerini alır.
- `GET /getEntryByDate`: Belirli bir tarihe ait günlüğü alır.
- `PUT /updateEntry`: Belirli bir tarihe ait günlüğü günceller.
- `DELETE /deleteEntry`: Belirli bir günlüğü siler.

---
