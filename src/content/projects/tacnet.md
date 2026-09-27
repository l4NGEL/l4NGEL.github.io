---
title: TacNet
tagline: Yer istasyonu ağları için SDN ve ağ otomasyon platformu — kontrolcü, masaüstü konsol, MANET simülatörü ve ağ servisleri.
categories: [sys]
featured: true
order: 4
period: Ağustos 2026
stack: [Python, FastAPI, asyncio, C#, .NET 8, WPF, Rust, Docker, FRRouting, Netmiko, WireGuard]
highlights:
  - "3 FRRouting konteyneri arasında <b>canlı OSPF komşuluğu</b>; gerçek SDN akış kurulumu"
  - "C#/.NET 8 WPF MVVM konsol · Rust AODV-lite MANET simülatörü"
  - "Netmiko/Paramiko konfigürasyon dağıtımı, WireGuard/IPsec, MAVLink v1, SNMP/NetFlow, DNS/DHCP/RADIUS"
  - "3 dilde <b>71 test</b>"
---

## Ne yapıyor

İHA yer istasyonu ağları için SDN kontrolcüsü merkezli bir ağ platformu:

| Bileşen | Teknoloji | İş |
|---|---|---|
| SDN kontrolcü | Python, FastAPI, asyncio TCP | Switch ajanlarına akış kuralı dağıtır |
| Yer istasyonu konsolu | C#, .NET 8, WPF (MVVM) | Topoloji, akışlar, MANET, MAVLink |
| MANET motoru | Rust | AODV-lite sürü yönlendirme simülatörü |
| Ağ otomasyonu | Ansible, Netmiko, Paramiko | Konfigürasyon üretimi, dağıtım, yedekleme |
| VPN | WireGuard, IPsec | Konfigürasyon üretimi, X25519 anahtarları |
| Telemetri | pymavlink | MAVLink v1 kodlama/çözme |
| İzleme | pysnmp, NetFlow v5 | SNMP v2c sorguları, akış toplayıcı |
| Ağ servisleri | dnsmasq, FreeRADIUS | DNS, DHCP, RADIUS |

## Canlı doğrulama

Birim testlerinin (71/71; pytest, cargo test, xUnit) ötesinde tüm yığın Docker'da ayağa kaldırılıp doğrulandı:

- **3 FRRouting konteyneri arasında OSPF komşuluğu** kuruldu (DR seçimi dahil).
- SDN akışı `sw1 → sw2 → sw3` üç gerçek konteynere kuruldu; WPF konsolundan canlı olarak yeni akış eklendi.
- Netmiko (SFTP ile konfigürasyon gönderimi) ve Paramiko (yedekleme) gerçek SSH oturumlarıyla çalıştı.
- Gerçek DNS sorgusu, DHCPDISCOVER/OFFER/ACK ve RADIUS Access-Accept/Reject alışverişleri.

Bu testler gerçek hatalar da yakaladı: kontrolcü hazır olmadan başlayan switch ajanları, `CAP_SYS_ADMIN` olmadan çalışmayan zebra ve Docker'ın otomatik IP aralığıyla çakışan statik adres.

## Bilinen sınırlamalar

- Ansible CLI native Windows'ta çalışmadığı için playbook'lar çalıştırılmadı; aynı mantık Netmiko/Paramiko ile canlı doğrulandı.
- VLAN alt arayüzleri konfigürasyonda var ama çekirdekte canlı değil (tek NIC'li konteynerler).
- VPN tüneli için canlı el sıkışma ve Kubernetes manifestleri için gerçek küme testi yapılmadı.
