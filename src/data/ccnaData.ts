export interface ModuleMeta {
  id: number;
  name: string;
  fullName: string;
  weight: number; // percentage in CCNA 200-301
  ciscoCode: string;
  description: string;
}

export const MODULE_META: ModuleMeta[] = [
  {
    id: 0,
    name: '1. Network Fundamentals',
    fullName: '1. Network Fundamentals',
    weight: 20,
    ciscoCode: '1.0',
    description: '實體層規格、雙絞線/光纖、TCP/IP 與 OSI 七層、IPv4 子網與 IPv6 定址、雲端與虛擬化'
  },
  {
    id: 1,
    name: '2. Network Access',
    fullName: '2. Network Access',
    weight: 20,
    ciscoCode: '2.0',
    description: 'VLAN 劃分、802.1Q Trunking、STP/RSTP 根橋生成樹、EtherChannel 鏈路綑綁、WLC 無線架構'
  },
  {
    id: 2,
    name: '3. IP Connectivity',
    fullName: '3. IP Connectivity',
    weight: 25,
    ciscoCode: '3.0',
    description: '路由表仲裁 (LPM/AD/Metric)、靜態與浮動路由、OSPFv2/v3 鄰居條件與狀態機、FHRP/HSRP 備援'
  },
  {
    id: 3,
    name: '4. IP Services',
    fullName: '4. IP Services',
    weight: 10,
    ciscoCode: '4.0',
    description: 'NAT/PAT 埠位址轉換、DHCP Server 與 Relay Agent、NTP 時間同步、Syslog 與 SNMPv3 網管、QoS'
  },
  {
    id: 4,
    name: '5. Security Fundamentals',
    fullName: '5. Security Fundamentals',
    weight: 15,
    ciscoCode: '5.0',
    description: 'Layer 2 安全 (Port Security/DHCP Snooping/DAI)、標準與延伸 ACL、AAA 與 802.1X、VPN 與 IPsec'
  },
  {
    id: 5,
    name: '6. Automation & Programmability',
    fullName: '6. Automation & Programmability',
    weight: 10,
    ciscoCode: '6.0',
    description: 'SDN 控制器與 Cisco DNA Center、REST API 與 HTTP 狀態碼、JSON/YAML 格式、Ansible 與 Terraform'
  }
];


export const CCNA_TAXONOMY = [
  // ── 1. Network Fundamentals (20%) ──
  {
    m: 0,
    name: '1.1 實體層排錯、纜線與光纖規格 (L1/Cabling/Optics)',
    tokens: [
      ['late collision', 10], ['late collisions', 10], ['collision', 4], ['duplex', 6],
      ['100-meter', 6], ['csma/cd', 8], ['single-mode', 8], ['multimode', 8],
      ['9-micron', 8], ['smf', 6], ['mmf', 6], ['cat6a', 6], ['cat5e', 6],
      ['1000base', 6], ['fiber', 4], ['straight-through', 6], ['crossover', 6],
      ['poe', 6], ['802.3at', 8], ['802.3af', 8], ['802.3bt', 8], ['cable', 4]
    ]
  },
  {
    m: 0,
    name: '1.2 IPv4 定址、VLSM 與子網劃分 (IPv4/Subnetting)',
    tokens: [
      ['rfc 3021', 10], ['/31', 8], ['/32', 6], ['/29', 6], ['/30', 6], ['/28', 6],
      ['/26', 6], ['/27', 6], ['/20', 6], ['usable host', 8], ['subnet mask', 8],
      ['wildcard mask', 8], ['255.255', 6], ['192.168', 5], ['172.16', 5], ['172.17', 5],
      ['10.0.0.0', 5], ['rfc 1918', 8], ['private ip', 6], ['apipa', 8],
      ['169.254', 8], ['loopback 127', 6], ['class c', 6], ['binary', 5]
    ]
  },
  {
    m: 0,
    name: '1.3 IPv6 定址、SLAAC 與 EUI-64 (IPv6 Fundamentals)',
    tokens: [
      ['eui-64', 10], ['slaac', 10], ['ipv6', 6], ['ff02::', 8], ['fe80::', 8],
      ['2001:', 6], ['compressed form', 8], ['link-local', 6], ['solicited-node', 8],
      ['router advertisement', 8], ['6to4', 8], ['nat64', 8], ['dual stack', 8]
    ]
  },
  {
    m: 0,
    name: '1.4 TCP/IP 與 OSI 模型封裝 (TCP/UDP/OSI Layers)',
    tokens: [
      ['three-way handshake', 10], ['syn-ack', 8], ['syn', 6], ['full-duplex', 6],
      ['tcp', 4], ['udp', 4], ['osi', 5], ['segment', 6], ['packet', 4],
      ['frame', 4], ['bit', 4], ['encapsulation', 6], ['pdu', 6], ['ttl', 6],
      ['checksum', 6], ['layer 4', 6], ['l2 / l3', 6]
    ]
  },
  {
    m: 0,
    name: '1.5 雲端運算架構與虛擬化技術 (Cloud/Virtualization)',
    tokens: [
      ['hybrid cloud', 10], ['public cloud', 8], ['private cloud', 8], ['iaas', 8],
      ['paas', 8], ['saas', 8], ['hypervisor', 10], ['esxi', 8], ['type 1', 8],
      ['type 2', 8], ['containers', 8], ['docker', 8], ['virtual machine', 6]
    ]
  },
  {
    m: 0,
    name: '1.6 基礎網路服務與拓撲 (Topology/ARP/DNS/Gateway)',
    tokens: [
      ['full mesh', 8], ['topology', 6], ['default gateway', 8], ['arp cache', 8],
      ['arp request', 8], ['arp', 5], ['127.0.0.1', 6], ['mx record', 8],
      ['dns cache', 8], ['dns', 5], ['spine', 8], ['leaf', 8]
    ]
  },

  // ── 2. Network Access (20%) ──
  {
    m: 1,
    name: '2.1 VLAN、Trunking 與 Native VLAN (VLAN/802.1Q)',
    tokens: [
      ['native vlan', 10], ['allowed vlan', 8], ['802.1q', 8], ['trunk', 6],
      ['voice vlan', 8], ['switchport', 6], ['dtp', 8], ['nonegotiate', 8],
      ['dynamic auto', 8], ['dynamic desirable', 8], ['vlan 1', 6], ['vtp', 8],
      ['transparent', 8], ['vlan', 4]
    ]
  },
  {
    m: 1,
    name: '2.2 STP/RSTP 根橋選舉與保護機制 (STP/RSTP/Guard)',
    tokens: [
      ['spanning-tree', 8], ['stp', 6], ['rstp', 8], ['root bridge', 8],
      ['bpdu guard', 10], ['root guard', 10], ['loop guard', 10], ['portfast', 8],
      ['alternate port', 8], ['backup port', 8], ['discarding', 6],
      ['superior bpdu', 10], ['24576', 8], ['28672', 8]
    ]
  },
  {
    m: 1,
    name: '2.3 EtherChannel 鏈路綑綁與模式 (EtherChannel/LACP)',
    tokens: [
      ['etherchannel', 10], ['lacp', 8], ['pagp', 8], ['channel-group', 8],
      ['active', 5], ['passive', 5], ['desirable', 6], ['port-channel', 8],
      ['min-links', 10], ['(su)', 8], ['(p)', 6]
    ]
  },
  {
    m: 1,
    name: '2.4 企業級無線網路 WLC 與 AP 架構 (Wireless/WLC/AP)',
    tokens: [
      ['wlc', 10], ['lightweight', 8], ['autonomous', 8], ['capwap', 10],
      ['split-mac', 10], ['2.4 ghz', 8], ['5 ghz', 8], ['channels 1, 6, and 11', 10],
      ['wpa2', 6], ['wpa3', 8], ['sae', 8], ['dragonfly', 8], ['roaming', 8],
      ['reassociation', 10], ['rrm', 8], ['rssi', 8], ['band select', 10],
      ['aaa override', 10], ['oeap', 10], ['flexconnect', 10], ['ssid', 6], ['rf', 5]
    ]
  },
  {
    m: 1,
    name: '2.5 交換器轉發原理與探索協定 (Switch/CDP/LLDP)',
    tokens: [
      ['mac address table', 8], ['cam table', 8], ['flooding', 6], ['unknown unicast', 8],
      ['cdp', 8], ['lldp', 8], ['802.1ab', 8], ['tlv', 8], ['holdtime', 6]
    ]
  },

  // ── 3. IP Connectivity (25%) ──
  {
    m: 2,
    name: '3.1 路由表解析與選路仲裁 (Routing Table/LPM/AD)',
    tokens: [
      ['longest prefix match', 10], ['administrative distance', 8], ['ad', 6],
      ['metric', 6], ['show ip route', 8], ['candidate default', 8],
      ['route print', 6], ['fib', 6], ['rib', 6], ['prefix', 5]
    ]
  },
  {
    m: 2,
    name: '3.2 靜態路由、預設與浮動備援 (Static/Default/Floating)',
    tokens: [
      ['static route', 8], ['default route', 8], ['0.0.0.0 0.0.0.0', 8],
      ['floating static', 10], ['gateway of last resort', 8], ['next-hop', 6],
      ['exit interface', 6], ['s*', 8]
    ]
  },
  {
    m: 2,
    name: '3.3 OSPFv2/OSPFv3 鄰居條件與狀態機 (OSPF Neighbors/LSA)',
    tokens: [
      ['ospf', 8], ['ospfv2', 8], ['ospfv3', 8], ['router id', 8], ['router-id', 8],
      ['area 0', 6], ['hello and dead', 10], ['hello', 4], ['dead', 4],
      ['exstart', 10], ['2-way', 8], ['dr/bdr', 10], ['224.0.0.5', 8], ['224.0.0.6', 8],
      ['type 1', 6], ['type 2', 6], ['lsa', 6], ['reference-bandwidth', 8],
      ['passive-interface', 8], ['default-information originate', 10]
    ]
  },
  {
    m: 2,
    name: '3.4 跨 VLAN 路由 SVI 與 ROAS (Inter-VLAN Routing)',
    tokens: [
      ['router-on-a-stick', 10], ['subinterface', 8], ['encapsulation dot1q', 8],
      ['svi', 8], ['interface vlan', 8], ['ip routing', 8]
    ]
  },
  {
    m: 2,
    name: '3.5 第一跳閘道備援協定 (FHRP/HSRP/VRRP/GLBP)',
    tokens: [
      ['fhrp', 8], ['hsrp', 8], ['vrrp', 8], ['glbp', 8], ['standby preempt', 10],
      ['standby', 6], ['virtual ip', 8], ['virtual mac', 8], ['0000.0c07.ac', 10],
      ['0000.5e00.01', 10], ['tracking', 6]
    ]
  },

  // ── 4. IP Services (10%) ──
  {
    m: 3,
    name: '4.1 NAT 與 PAT 埠位址轉換 (NAT/PAT/Overload)',
    tokens: [
      ['inside local', 10], ['inside global', 10], ['outside local', 8],
      ['outside global', 8], ['static nat', 8], ['dynamic nat', 8],
      ['pat', 8], ['overload', 8], ['ip nat inside', 8], ['ip nat outside', 8]
    ]
  },
  {
    m: 3,
    name: '4.2 DHCP 服務與 Relay 中繼代理 (DHCP/Relay Agent)',
    tokens: [
      ['dhcp', 6], ['dora', 10], ['discover', 6], ['offer', 6], ['request', 4],
      ['acknowledge', 6], ['ip helper-address', 10], ['udp 67', 8], ['udp 68', 8],
      ['option 43', 10], ['option 150', 10], ['option 66', 8], ['option 3', 8],
      ['default-router', 8], ['lease', 6]
    ]
  },
  {
    m: 3,
    name: '4.3 時間同步、日誌與監控 (NTP/Syslog/SNMP)',
    tokens: [
      ['ntp master', 10], ['ntp', 6], ['stratum', 8], ['synchronized', 8],
      ['syslog', 8], ['severity', 8], ['emergency', 6], ['debugging', 6],
      ['logging trap', 10], ['snmpv3', 10], ['snmpv2c', 8], ['snmp', 6],
      ['usm', 8], ['getbulk', 8], ['inform', 8], ['authpriv', 8], ['trap', 6],
      ['mib', 6], ['oid', 6]
    ]
  },
  {
    m: 3,
    name: '4.4 QoS 服務品質分類與標記 (QoS/CoS/DSCP)',
    tokens: [
      ['qos', 8], ['dscp', 8], ['cos', 8], ['expedited forwarding', 10],
      ['ef', 6], ['af31', 8], ['best effort', 6], ['policing', 8],
      ['shaping', 8], ['trust boundary', 10], ['queue', 6], ['buffer', 6]
    ]
  },

  // ── 5. Security Fundamentals (15%) ──
  {
    m: 4,
    name: '5.1 Layer 2 安全防護 (Port Sec/Snooping/DAI)',
    tokens: [
      ['port security', 10], ['port-security', 10], ['violation', 8], ['protect', 6],
      ['restrict', 6], ['shutdown', 5], ['sticky', 8], ['errdisable', 8],
      ['dhcp snooping', 10], ['untrusted', 8], ['trusted', 6],
      ['dynamic arp inspection', 10], ['dai', 8], ['arp spoofing', 8],
      ['cam overflow', 8], ['mac flooding', 8]
    ]
  },
  {
    m: 4,
    name: '5.2 ACL 存取控制清單 (Standard/Extended/Named ACL)',
    tokens: [
      ['access-list', 8], ['acl', 6], ['standard acl', 8], ['extended acl', 8],
      ['named acl', 8], ['implicit deny', 10], ['ip access-group', 8],
      ['access-class', 10], ['line vty', 6]
    ]
  },
  {
    m: 4,
    name: '5.3 AAA 架構、身分認證與密碼強化 (AAA/802.1X/Passwords)',
    tokens: [
      ['tacacs+', 10], ['radius', 8], ['802.1x', 10], ['supplicant', 8],
      ['authenticator', 8], ['authentication', 6], ['authorization', 6],
      ['accounting', 6], ['enable secret', 8], ['algorithm-type scrypt', 10],
      ['type 9', 8], ['type 8', 8], ['type 5', 8], ['type 7', 8],
      ['service password-encryption', 8], ['mfa', 8]
    ]
  },
  {
    m: 4,
    name: '5.4 VPN 隧道與密碼學基礎 (VPN/IPsec/Encryption)',
    tokens: [
      ['site-to-site', 8], ['remote access', 8], ['ipsec', 8], ['tunnel mode', 10],
      ['transport mode', 10], ['esp', 8], ['ah', 8], ['ike', 8], ['sha-256', 6],
      ['aes', 6], ['rsa', 6], ['symmetric', 6], ['asymmetric', 6], ['vpn', 6],
      ['phishing', 8], ['ransomware', 8], ['social engineering', 8], ['ids', 6], ['ips', 6]
    ]
  },

  // ── 6. Automation & Programmability (10%) ──
  {
    m: 5,
    name: '6.1 SDN 控制器與 DNA/Catalyst Center (SDN/DNA-C)',
    tokens: [
      ['sdn', 8], ['dna center', 10], ['catalyst center', 10], ['intent-based', 8],
      ['assurance', 8], ['fabric', 8], ['lisp', 8], ['vxlan', 8], ['control plane', 6],
      ['data plane', 6], ['management plane', 6], ['controller', 6]
    ]
  },
  {
    m: 5,
    name: '6.2 REST API、HTTP 狀態碼與資料格式 (REST/JSON/YAML)',
    tokens: [
      ['rest api', 8], ['rest', 6], ['northbound', 8], ['southbound', 8],
      ['200 ok', 8], ['201 created', 8], ['204 no content', 10],
      ['401 unauthorized', 8], ['403 forbidden', 10], ['404 not found', 8],
      ['500 internal server error', 8], ['json', 6], ['yaml', 6], ['xml', 6],
      ['yang', 8], ['netconf', 8], ['restconf', 8], ['postman', 8]
    ]
  },
  {
    m: 5,
    name: '6.3 自動化組態管理與 IaC 工具 (Ansible/Terraform/Python)',
    tokens: [
      ['ansible', 10], ['agentless', 8], ['playbook', 8], ['terraform', 10],
      ['iac', 8], ['puppet', 8], ['chef', 8], ['json.loads()', 8],
      ['requests', 6], ['netmiko', 8], ['python', 6]
    ]
  }
];

export const REMEDIATION_GUIDE: Record<string, {
  day: string;
  tab: string;
  kw: string;
  summary: string;
}> = {
  '1.1 實體層排錯、纜線與光纖規格 (L1/Cabling/Optics)': {
    day: 'Day 1（實體層與纜線規格）',
    tab: 'tables',
    kw: '光纖',
    summary: '重點複習單模 (SMF 9µm Laser) vs 多模 (MMF 50µm LED) 光纖特性、雙絞線長度限制 (100m) 與 Late Collision 雙工排錯。'
  },
  '1.2 IPv4 定址、VLSM 與子網劃分 (IPv4/Subnetting)': {
    day: 'Day 3（IPv4 子網路劃分 — 每日 20 題）',
    tab: 'calc',
    kw: 'IPv4',
    summary: '善用本系統「IPv4 Subnetting 計算機」演練 RFC 3021 /31 點對點鏈路與 /32 主機遮罩運算。'
  },
  '1.3 IPv6 定址、SLAAC 與 EUI-64 (IPv6 Fundamentals)': {
    day: 'Day 4（IPv6 位址類型與縮寫規則）',
    tab: 'tables',
    kw: 'IPv6',
    summary: '聚焦 EUI-64 第 7 bit 反轉（U/L bit）、Link-Local (FE80::/10) 與 SLAAC 搭配 Router Advertisement (RA) 流程。'
  },
  '1.4 TCP/IP 與 OSI 模型封裝 (TCP/UDP/OSI Layers)': {
    day: 'Day 2（TCP/IP 與 OSI 七層對照、TCP 三向交握）',
    tab: 'tables',
    kw: 'TCP',
    summary: '重溫 TCP 三向交握 (SYN→SYN-ACK→ACK)、常見 Port 埠號 (HTTP 80/HTTPS 443/SSH 22/DNS 53) 與 L1-L4 PDU 封裝。'
  },
  '1.5 雲端運算架構與虛擬化技術 (Cloud/Virtualization)': {
    day: 'Day 1（打地基：虛擬化與雲端服務）',
    tab: 'tables',
    kw: '虛擬化',
    summary: '比較 Type 1 (Bare-Metal/ESXi) vs Type 2 (Hosted) Hypervisor，以及 Container 共享 OS Kernel 的輕量特性。'
  },
  '1.6 基礎網路服務與拓撲 (Topology/ARP/DNS/Gateway)': {
    day: 'Day 1–2（網路拓撲與基礎通訊）',
    tab: 'tables',
    kw: 'ARP',
    summary: '理解跨網段封裝先發 ARP 請求預設閘道 MAC、Full-Mesh 連線數公式 n(n-1)/2 與 DNS 遞迴查詢。'
  },
  '2.1 VLAN、Trunking 與 Native VLAN (VLAN/802.1Q)': {
    day: 'Day 5 與 Day 13（交換原理、VLAN 與 Trunking）',
    tab: 'labs',
    kw: 'Trunking',
    summary: '802.1Q Native VLAN 預設明文不打標，兩端 ID 不匹配將導致 VLAN 洩漏與廣播域合併。'
  },
  '2.2 STP/RSTP 根橋選舉與保護機制 (STP/RSTP/Guard)': {
    day: 'Day 15（STP/RSTP 根橋選舉與 Port Cost）',
    tab: 'tables',
    kw: 'STP',
    summary: '熟記 Bridge Priority (4096 倍數) + 最低 MAC 選舉原則；區分 BPDU Guard (邊緣鎖埠) 與 Root Guard (下游防奪權)。'
  },
  '2.3 EtherChannel 鏈路綑綁與模式 (EtherChannel/LACP)': {
    day: 'Day 16（EtherChannel 模式匹配矩陣）',
    tab: 'tables',
    kw: 'EtherChannel',
    summary: '複習 LACP (active/passive) 與 PAgP (desirable/auto) 模式匹配矩陣，注意成員埠 (s) 代表參數不一致被掛起。'
  },
  '2.4 企業級無線網路 WLC 與 AP 架構 (Wireless/WLC/AP)': {
    day: 'Day 17–18（無線架構：Autonomous vs Lightweight、WPA3）',
    tab: 'tables',
    kw: 'WLAN',
    summary: '聚焦 Split-MAC 架構中 CAPWAP 控制 (UDP 5246) / 資料 (UDP 5247) 傳輸，以及 WPA3-SAE Dragonfly 抗字典攻擊機制。'
  },
  '2.5 交換器轉發原理與探索協定 (Switch/CDP/LLDP)': {
    day: 'Day 5 與 Day 19（交換原理與探索協定）',
    tab: 'tables',
    kw: 'CDP',
    summary: '區別 Cisco 專屬 CDP (預設啟用) 與 IEEE 802.1AB 開放標準 LLDP (需手動 lldp run)；掌握未知單播 Flooding 行為。'
  },
  '3.1 路由表解析與選路仲裁 (Routing Table/LPM/AD)': {
    day: 'Day 6（路由仲裁黃金律）',
    tab: 'tables',
    kw: 'Longest Prefix',
    summary: '落實查表三部曲：① 最長前綴匹配 (LPM) > ② 管理距離 (AD) > ③ 度量值 (Metric)；/28 路由必優先於 /24 路由。'
  },
  '3.2 靜態路由、預設與浮動備援 (Static/Default/Floating)': {
    day: 'Day 6 與 Day 11（靜態路由與浮動備援）',
    tab: 'labs',
    kw: '靜態路由',
    summary: '理解浮動靜態路由 AD 必須大於動態協定 (如設為 120)，且乙太網路介面必須指定下一跳 IP。'
  },
  '3.3 OSPFv2/OSPFv3 鄰居條件與狀態機 (OSPF Neighbors/LSA)': {
    day: 'Day 8–9（OSPFv2 鄰居狀態機、Timer 與 DR 選舉）',
    tab: 'tables',
    kw: 'OSPF',
    summary: '排查 OSPF 鄰居 7 大匹配條件；卡在 ExStart 檢查 MTU 與重複 Router-ID；DR 選舉採最高 Priority 且不具搶佔性。'
  },
  '3.4 跨 VLAN 路由 SVI 與 ROAS (Inter-VLAN Routing)': {
    day: 'Day 13（VLAN 間路由：ROAS 與 SVI）',
    tab: 'labs',
    kw: 'ROAS',
    summary: '比對 Router-on-a-Stick 子介面 dot1q 封裝與 L3 Switch SVI (需 ip routing) 的轉發原理。'
  },
  '3.5 第一跳閘道備援協定 (FHRP/HSRP/VRRP/GLBP)': {
    day: 'Day 10（FHRP 第一跳冗餘與 HSRP）',
    tab: 'tables',
    kw: 'HSRP',
    summary: '演練 HSRPv2 虛擬 MAC (0000.0C9F.Fxxx)、standby preempt 搶佔機制，以及 VRRP (Master/Backup) 開放標準差異。'
  },
  '4.1 NAT 與 PAT 埠位址轉換 (NAT/PAT/Overload)': {
    day: 'Day 12（NAT / PAT 完整演練）',
    tab: 'labs',
    kw: 'NAT',
    summary: 'Inside/Outside 方向不可顛倒；PAT 多對一上網必須加上 overload 關鍵字以透過 L4 Port 區分連線。'
  },
  '4.2 DHCP 服務與 Relay 中繼代理 (DHCP/Relay Agent)': {
    day: 'Day 23（DHCP Relay 與 DORA 流程）',
    tab: 'labs',
    kw: 'DHCP',
    summary: '掌握 DORA 四步驟；ip helper-address 必須配置在靠近客戶端的入口介面，將廣播轉為單播並填入 giaddr 選池。'
  },
  '4.3 時間同步、日誌與監控 (NTP/Syslog/SNMP)': {
    day: 'Day 22（NTP、Syslog 嚴重度與 SNMPv3）',
    tab: 'tables',
    kw: 'Syslog',
    summary: '記憶 Syslog 嚴重度 0 (Emergency) 至 7 (Debugging)；NTP Stratum 16 代表未同步；SNMPv3 authPriv 具備加密防護。'
  },
  '4.4 QoS 服務品質分類與標記 (QoS/CoS/DSCP)': {
    day: 'Day 23（QoS 分類標記、Policing 與 Shaping）',
    tab: 'tables',
    kw: 'QoS',
    summary: '語音標記為 EF (DSCP 46 / CoS 5)；Policing (丟棄/重標記) 支援雙向，Shaping (佇列緩衝平滑) 僅支援 Outbound。'
  },
  '5.1 Layer 2 安全防護 (Port Sec/Snooping/DAI)': {
    day: 'Day 20（Port Security、DHCP Snooping 與 DAI）',
    tab: 'labs',
    kw: 'Port Security',
    summary: '熟悉 Port Security 三大違規模式 (Protect/Restrict/Shutdown)；DAI 依賴 DHCP Snooping 建立的 IP-MAC 綁定表防 ARP 欺騙。'
  },
  '5.2 ACL 存取控制清單 (Standard/Extended/Named ACL)': {
    day: 'Day 11（ACL 基本語法與放置位置原則）',
    tab: 'tables',
    kw: 'ACL',
    summary: 'Standard ACL (僅來源 IP) 放靠近目的地；Extended ACL (五元組) 放靠近來源；由上而下逐條匹配且末端隱含 Deny Any。'
  },
  '5.3 AAA 架構、身分認證與密碼強化 (AAA/802.1X/Passwords)': {
    day: 'Day 19（AAA 架構、802.1X 與密碼強化）',
    tab: 'tables',
    kw: 'TACACS+',
    summary: 'TACACS+ (TCP 49 全加密/逐指令授權) vs RADIUS (UDP 1812/1813 僅加密密碼)；Type 9 Scrypt 雜湊具最高防破解強度。'
  },
  '5.4 VPN 隧道與密碼學基礎 (VPN/IPsec/Encryption)': {
    day: 'Day 20（Site-to-Site VPN 與 IPsec 機制）',
    tab: 'tables',
    kw: 'VPN',
    summary: 'IPsec Tunnel Mode 加密整個原始封包並加新標頭；ESP (Protocol 50) 提供加密與認證，AH (Protocol 51) 僅認證不加密。'
  },
  '6.1 SDN 控制器與 DNA/Catalyst Center (SDN/DNA-C)': {
    day: 'Day 26（SDN 架構、Controller 與 DNA Center）',
    tab: 'tables',
    kw: 'Controller',
    summary: 'SDN 將控制與管理平面集中於 Controller，資料平面留於本地線速轉發；DNA-C 提供 Assurance 遙測主動健康分析。'
  },
  '6.2 REST API、HTTP 狀態碼與資料格式 (REST/JSON/YAML)': {
    day: 'Day 24–25（REST API、HTTP 動詞與 JSON/YAML）',
    tab: 'tables',
    kw: 'REST API',
    summary: 'CRUD 對應 POST(201)/GET(200)/PUT(200)/DELETE(204)；401 代表未驗證，403 代表權限不足；JSON 鍵名必須使用雙引號。'
  },
  '6.3 自動化組態管理與 IaC 工具 (Ansible/Terraform/Python)': {
    day: 'Day 27（Terraform、Ansible 與 Python 自動化）',
    tab: 'tables',
    kw: 'Ansible',
    summary: 'Ansible 為 Agentless + Push 模式 (走 SSH/YAML Playbook)；Terraform 為宣告式 IaC 基礎設施佈建工具。'
  }
};
